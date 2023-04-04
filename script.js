<script>
$(document).ready(function() {
    $(".btn").mouseenter(function() {
        $("#myList").css('display', 'block')
    })
    $(".list").mouseenter(function() {
        $("#myList").css('display', 'block')
    })
    $(".btn").mouseleave(function() {
        $("#myList").css('display', 'none')
    })
    $(".list").mouseleave(function() {
        $("#myList").css('display', 'none')
    })
})
</script>
