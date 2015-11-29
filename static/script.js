$(function() {
    $('#xButton').click(function() {
        var z = 17;
        myData = {'num':z};
        $.ajax({
            url: '/changeX',
            data: JSON.stringify(myData),
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            type: 'POST',
            success: function(response) {
                $('#xVal').text(response.x)
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});