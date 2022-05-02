$(document).ready(function(){
    test.init();
});

var test = {
    init : function(){
        const TDLArr = [];
        
        const allTDL = JSON.stringify(TDLArr);

        test.addBox();
    },
    addBox : function(){

        const nowDate = new Date();
        const year = nowDate.getFullYear();
        const month = nowDate.getMonth();
        const date = nowDate.getDate();
        const day = nowDate.getDay();
        const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

        let remDoList = 0;

        const titAdd = '';
        const tdAdd = {};

        const TDLobj = {
            num: TDLArr.length,
            date: nowDate,
            title: titAdd,
            list : tdAdd,
            remain: remDoList
        }

        TDLArr.push(TDLobj);

        localStorage.setItem('toDoList', allTDL);
        console.log(localStorage.getItem('toDoList'));


        var newBox = `<label class="del_chk">
                                <input type="checkbox" disabled>
                                <div class="tdList_box">

                                    <div class="tdList_tit_box">
                                        <input type="text" class="tdList_tit bn p_0" placeholder="제목을 입력하세요" onkeypress="tdPrint(this)">
                                        <p class="tdList_date">${year}년 ${month + 1}월 ${date}일 ${days[day]}</p>
                                        <div class="tdList_remain"><b>할 일 ${remDoList}개 남음</b></div>
                                    </div>

                                        <ul class="tdList_list_box"></ul>

                                    <div class="txt_box toggle_on">
                                        <form >
                                            <input type="text" style="display: none;">
                                            <input class="td_add bn" type="text" onkeypress="tdPrint(this)" placeholder="할 일을 입력 후, Enter를 누르세요." value="">
                                        </form>
                                    </div>
                                    <div class="tdList_btn_box toggle_on" onclick="txtBoxOn(this)">
                                        <button class="tdList_btn">
                                            <i class="icon_plus"></i>
                                        </button>
                                    </div>

                                </div>
                        </label>`;
        var boxWrap = document.querySelector('.row');
        var newCol = document.createElement('div');

        newCol.classList.add('col_8');
        newCol.innerHTML = newBox;

        boxWrap.prepend(newCol);
    }
}