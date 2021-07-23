# MySQL_기본 문법정리 #1 CREATE

---

# 데이터베이스 생성 및 사용하기

## SHOW DATABASESE;

현재 서버에 어떤 데이터베이스가 있는지 확인합니다.

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)
```

<br />

## CREATE DATABASES 데이터베이스_이름;

새로운 데이터 베이스를 생성할수 있습니다.

```
mysql> create databases testsql;
mysql> show databases;
```

위와 같이 명령어를 실행하면 아래와 같이 `testsql`이 생성 되었습니다.

```
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| testsql            |
+--------------------+
5 rows in set (0.00 sec)
```

<br />

## USE 데이터베이스_이름;

use는 사용할 데이터베이스를 지정합니다. 데이터베이스를 이용해 테이블을 만들거나 수정하거나 삭제 하는 등의 작업을 하려면 use명령어를 꼭 사용해야 합니다.

```
mysql> use testsql
Database changed
```

<br />

---

# 테이블 생성 및 조회하기

## CREATE TABLE 테이블이름(정보);

USE 를 이용해 데이터베이스를 선택했다면 해당 데이터베이스의 테이블을 생성할수 있습니다.

```
mysql> create table user(
    -> id int(11) not null auto_increment,
    -> title varchar(100) not null,
    -> description text null,
    -> created datetime not null,
    -> author varchar(15) null,
    -> profile varchar(200) null,
    -> primary key(id)
    -> );
Query OK, 0 rows affected, 1 warning (0.01 sec)
```

1. id값을 설정할때 데이터 타입 넘버를 참고 하길 (무난하게 INT)
2. NOT NULL은 값이 없는것을 허용하지 않겠다란 뜻입니다.
3. AUTO_INCREMENT는 자동으로 1씩 증가하고 중복되지 않은 식별자를 갖게 됩니다.
4. VARCHAR(size)는 글자제한을 의미합니다.(255까지 가능)  

데이터 타입을 참고하면서 작성하는 것을 권장합니다. [데이터타입참고](http://www.incodom.kr/DB_-_%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%83%80%EC%9E%85/MYSQL)

<br />

## DESCRIBE 테이블이름;

만약 위에 생성된 테이블의 결과를 확인하고 싶으면 아래와 같이 입력하면 됩니다.

```
mysql> DESCRIBE user;
```

아래와 같이 위에 작성했던 테이블에 대한 정보가 나옵니다.

```
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int          | NO   | PRI | NULL    | auto_increment |
| title       | varchar(100) | NO   |     | NULL    |                |
| description | text         | YES  |     | NULL    |                |
| created     | datetime     | NO   |     | NULL    |                |
| author      | varchar(15)  | YES  |     | NULL    |                |
| profile     | varchar(200) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
6 rows in set (0.01 sec)
```

<br />

---

# 테이블 내용 삽입하기 및 선택하기(조회)

## INSERT INTO 테이블이름(field정보) VALUES(해당하는field내용)

INSERT INTO 테이블이름() VALUES()는 해당 테이블에 대한 정보를 입력할수 있습니다. 테이블 이름과 벨류의 문자열 순으로 정보가 나열 됩니다.

```
mysql> insert into user(title,description,created,author,profile) 
values('joy','coding',now(),'jangh','developer');
Query OK, 1 row affected (0.00 sec)
```

<br />

## select * from 테이블이름;

위에 insert into로 입력한 정보를 선택해서 조회할수 있습니다. *은 전체를 조회할수 있습니다.

```
mysql> select * from user;
```

아래와 같이 위에 작성했던 테이블에 대한 정보가 나옵니다.

```
+----+-------+-------------+---------------------+--------+-----------+
| id | title | description | created             | author | profile   |
+----+-------+-------------+---------------------+--------+-----------+
|  1 | joy   | coding      | 2021-07-23 01:03:26 | jangh  | developer |
+----+-------+-------------+---------------------+--------+-----------+
1 row in set (0.00 sec)
```

번외 적으로 데이터를 하나 더 추가하고 싶으면 INSERT INTO를 다시 활용해서 작성하면 됩니다.

```
mysql> insert into user (title,description,created,author,profile) 
values('happy','coco',now(),'teemo','developer');
Query OK, 1 row affected (0.00 sec)
```

위와같이 정보를 추가하고 select * 을 사용해서 전체 정보를 선택합니다.

```
mysql> select * from user;
+----+-------+-------------+---------------------+--------+-----------+
| id | title | description | created             | author | profile   |
+----+-------+-------------+---------------------+--------+-----------+
|  1 | joy   | coding      | 2021-07-23 01:03:26 | jangh  | developer |
|  2 | happy | coco        | 2021-07-23 01:05:18 | teemo  | developer |
+----+-------+-------------+---------------------+--------+-----------+
2 rows in set (0.00 sec)
```

CUI뿐만아니라 GUI로 하는 방법도 있습니다. 이방법이 오히려 직관적이여서 더 좋을수도 있습니다. [참고링크](https://www.youtube.com/watch?v=vgIc4ctNFbc)를 통해 공부해보는것도 좋을것 같습니다!

---

# MySQL_기본 문법정리 #2 READ UPDATE DELETE

---

# SELECT 기본 문법

## SELECT * from 테이블이름

문법정리#1에 이어서 SELECT * 는 전체 정보를 선택해서 가져올수 있습니다.

```
mysql> select * from user;
+----+---------+-------------+---------------------+--------+-----------+
| id | title   | description | created             | author | profile   |
+----+---------+-------------+---------------------+--------+-----------+
|  1 | joy     | coding      | 2021-07-23 01:03:26 | jangh  | developer |
|  2 | happy   | coco        | 2021-07-23 01:05:18 | teemo  | developer |
|  3 | art     | cat         | 2021-07-23 01:46:20 | toto   | md        |
|  4 | love    | opa         | 2021-07-23 01:47:40 | puma   | teacher   |
|  5 | fashion | sexy        | 2021-07-23 01:49:15 | dior   | designer  |
+----+---------+-------------+---------------------+--------+-----------+
5 rows in set (0.00 sec)
```

<br />

## SELECT (원하는 Field) from 테이블이름

SELECT에서 원하는 값만 정보를 불러올수 있습니다. 예를들어 description과 profile을 제외한 field를 가져오려면 아래와 같습니다.

```
mysql> select id,title,created,author from user;
+----+---------+---------------------+--------+
| id | title   | created             | author |
+----+---------+---------------------+--------+
|  1 | joy     | 2021-07-23 01:03:26 | jangh  |
|  2 | happy   | 2021-07-23 01:05:18 | teemo  |
|  3 | art     | 2021-07-23 01:46:20 | toto   |
|  4 | love    | 2021-07-23 01:47:40 | puma   |
|  5 | fashion | 2021-07-23 01:49:15 | dior   |
+----+---------+---------------------+--------+
5 rows in set (0.00 sec)
```

<br />

## SELECT (원하는 Field) from 테이블이름 WHERE FIELD='해당정보'

추가적으로 WHERE옆에 field = '해당정보'를 입력하면 해당정보에 대한 세부적인 내용을 출력할수 있습니다. 예를들어 field는 title이고 title에서 'happy'라는 정보를 출력하고 싶을떄 아래와 같습니다.

```
mysql> select id,title,created,author from user where title='happy';
+----+-------+---------------------+--------+
| id | title | created             | author |
+----+-------+---------------------+--------+
|  2 | happy | 2021-07-23 01:05:18 | teemo  |
+----+-------+---------------------+--------+
1 row in set (0.00 sec)
```

<br />

## SELECT (원하는 Field) from 테이블이름 ORDER BY 기준(숫자,아이디) DESC;

OREDER BY id DESC;는 id값을 기준으로 정렬순서를 역전시킬수 있습니다(내림차순)

```
mysql> select id,title,created,author from user order by id desc;
+----+---------+---------------------+--------+
| id | title   | created             | author |
+----+---------+---------------------+--------+
|  5 | fashion | 2021-07-23 01:49:15 | dior   |
|  4 | love    | 2021-07-23 01:47:40 | puma   |
|  3 | art     | 2021-07-23 01:46:20 | toto   |
|  2 | happy   | 2021-07-23 01:05:18 | teemo  |
|  1 | joy     | 2021-07-23 01:03:26 | jangh  |
+----+---------+---------------------+--------+
5 rows in set (0.00 sec)
```

만약에 여기서 내림차순 기준으로 3개의 데이터만 볼수있게 제한을 걸고 싶으면 옆에 `LIMIT 3;`을 입력하면 됩니다. (광범위한 데이터를 제한 걸어서 효율적으로 관리할수 있습니다.)

```
mysql> select id,title,created,author from user order by id desc limit 3;
+----+---------+---------------------+--------+
| id | title   | created             | author |
+----+---------+---------------------+--------+
|  5 | fashion | 2021-07-23 01:49:15 | dior   |
|  4 | love    | 2021-07-23 01:47:40 | puma   |
|  3 | art     | 2021-07-23 01:46:20 | toto   |
+----+---------+---------------------+--------+
3 rows in set (0.00 sec)
```

<br />

## UPDATE 테이블 SET (원하는 Field) WHERE (아이디값)

UPDATE를 통해 해당 아이디에 있는 Field값을 수정할수 있습니다. 주의할점은 where문을 꼭!! 기입하기

```
mysql> update user set title='mysql',author='kakao' where id=2;
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from user;
+----+---------+-------------+---------------------+--------+-----------+
| id | title   | description | created             | author | profile   |
+----+---------+-------------+---------------------+--------+-----------+
|  1 | joy     | coding      | 2021-07-23 01:03:26 | jangh  | developer |
|  2 | mysql   | coco        | 2021-07-23 01:05:18 | kakao  | developer |
|  3 | art     | cat         | 2021-07-23 01:46:20 | toto   | md        |
|  4 | love    | opa         | 2021-07-23 01:47:40 | puma   | teacher   |
|  5 | fashion | sexy        | 2021-07-23 01:49:15 | dior   | designer  |
+----+---------+-------------+---------------------+--------+-----------+
5 rows in set (0.00 sec)
```

<br />

## DELETE from 테이블 WHERE (삭제하고싶은값)

delete는 from ... where 은 원치않은 값을 삭제할수 있습니다. 만약 위에 있는 테이블에서 id값이 3인 정보를 삭제하고 싶으면 아래와 같습니다.

```
mysql> delete from user where id=3;
Query OK, 1 row affected (0.00 sec)

mysql> select * from user;
+----+---------+-------------+---------------------+--------+-----------+
| id | title   | description | created             | author | profile   |
+----+---------+-------------+---------------------+--------+-----------+
|  1 | joy     | coding      | 2021-07-23 01:03:26 | jangh  | developer |
|  2 | mysql   | coco        | 2021-07-23 01:05:18 | kakao  | developer |
|  4 | love    | opa         | 2021-07-23 01:47:40 | puma   | teacher   |
|  5 | fashion | sexy        | 2021-07-23 01:49:15 | dior   | designer  |
+----+---------+-------------+---------------------+--------+-----------+
4 rows in set (0.00 sec)
```