var displayCurrentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var currentDay = moment().format('LLLL');

displayCurrentDay.text(currentDay)

saveBtn.click(function(){
    var time = $(this).siblings("textarea").attr("id")
    var textValue = $(this).siblings("textarea").val()
    
    localStorage.setItem(time, textValue)
})



for (let i = 9; i <= 17; i++) {
    $("#" + i).val(localStorage.getItem(i))
}