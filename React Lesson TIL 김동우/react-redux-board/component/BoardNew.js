import React from 'react';

function BoardNew({ onSave, changeInput, inputData, resetForm }) {

    const saveBtnClick = (e) => {
        e.preventDefault();
        onSave(inputData);
        resetForm();
    }

    return (
        <div>
            <form onSubmit={saveBtnClick}>
                <div>
                    제목 : <input type="text" name="boardTitle" onChange={changeInput} value={inputData.boardTitle} />
                </div>
                <div>
                    내용 : <input type="text" name="boardContent"  onChange={changeInput} value={inputData.boardContent} />
                </div>
                <input type="hidden" name="boardId" onChange={changeInput} value={inputData.boardId} />
                <button type="submit" >신규 게시글 저장</button>
            </form>
        </div>
    )
};

export default BoardNew;