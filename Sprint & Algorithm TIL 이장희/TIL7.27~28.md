## SPRINT _DB_CMARKET

```js
const db = require('../db');

module.exports = {
  orders: {
    get: (userId, callback) => {
      // TODO: 해당 유저가 작성한 모든 주문을 가져오는 함수를 작성하세요
      let sql = `SELECT *, orders.id FROM orders
      INNER JOIN order_items ON orders.id = order_items.order_id
      INNER JOIN items ON items.id = order_items.item_id
      WHERE orders.user_id = ?
      `;

      const param = [userId]

      db.query(sql, param,(err, result)=>{
        callback(err, result);
      })
    },
    post: (userId, orders, totalPrice, callback) => {
      // TODO: 해당 유저의 주문 요청을 데이터베이스에 생성하는 함수를 작성하세요
      const sql = `INSERT INTO orders(user_id, total_price) VALUES (?,?)`;
      const params = [userId, totalPrice]

      db.query(sql,params,(err,result)=>{
        const nextsql = `INSERT INTO order_items(order_id, item_id, order_quantity) VALUES ?`
        const nextparams = orders.map((el)=>[result.insertId, el.itemId, el.quantity])
        db.query(nextsql, [nextparams], callback)
      })
    }
  },
  items: {
    get: (callback) => {
      // TODO: Cmarket의 모든 상품을 가져오는 함수를 작성하세요
      const queryString = `select*from items`
      db.query(queryString,(err, result)=>{
        if(err) callback(err)
        // console.log(result)
        callback(null, result);
      })
    }
  }
};
```

## 알아야할 내용

1. db.query(sql, params, (콜백함수))
- db.query는 첫번째 인자에서 쿼리문을 보내주고 두번째 인자는 해당하는 params를 세번째 인자는 콜백함수를 보내줍니다. 여기서 두번째 인자는 params를 사용하지 않을경우 생략하면 됩니다.  

2. ?문 (만약 ? 쓰기 싫으면 이터럴 문법으로 해결 가능)
- ?는 쿼리문에서 params의 값을 받아올수 있습니다. 이때 params는 배열에 담을수 있고 ?의 순서에 맞게 넣어 주면 됩니다.  

3. result.insertId
- result.insertId는 insert문이 실행했을때, 삽인된 데이터의 id값을 얻는 방법입니다.

---

# shortly-MVC

---

# part1

## sequelize 설치

아래와 같이 sequelize설치합니다.

```
npm i --save sequelize
```

<br >

## sequelize-cli 설치

devDependencies에다 설치하는 이유는 개발환경에서만 진행하기 위함입니다.

```
npm i --save-dev sequelize-cli
```

<br >

## 빈프로잭트 만들기 (bootstraping)

실행하면 config/config.json, models/ ,migrations/ ,seeders/ 폴더들이 생깁니다.

<br >

```
npx sequelize-cli init
```

<br >

## MySQL 연결하기

mysql접속하기 위해 설정한 비밀번호와 config.json에서 비밀번호를 동일하게 합니다.  
또한 mysql에 접속해서 데이터베이스의 이름을 config.json에 있는 데이터베이스 이름을 같게해서 데이터베이스를 수동으로 만들어줍니다.

<br >

## 모델 만들기

모델 생성시 이름을 단수로 생성 합니다. (어차피 자동으로 복수형으로 나오게 합니다.)

```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

위에 있는 명령문을 스프린트에서 요구하는 내용으로 변경하면 됩니다. 

```
npx sequelize-cli model:generate --name user --attributes url:string,title:string,visits:integer
```

<br >

## 마이그레이션 실행

마이그레이션은 데이터베이스 실제 디비에 심어주는 작업입니다. 데이터를 선택,준비, 추출 및 변환하는 작업을 합니다.

```
npx sequelize-cli db:migrate
```

<br >

## visits 초기값 설정

아래와 같이 visits를 객체로 담아 type과 defaultValue값을 설정할수 있습니다.

```js
//models/url.js
//...생략
 url.init({
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    visits: {
      type: DataTypes.INTEGER,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'url',
  });
  //...생략
```

<br />
