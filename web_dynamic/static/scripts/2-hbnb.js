$('document').ready(function () {
    const amenities = {};
    $('.checkbox').change(function () {
        if ($(this).is(':checked')) {
            amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete amenities[$(this).attr('data-id')];
        }
        $('.amenities H4').text(Object.values(amenities).sort().join(', '));
    });
    api_status();
});

function api_status() {
    const url = "http://0.0.0.0:5001/api/v1/status/";
    $.get(url, function(data, textStatus) {
        if (textStatus === 'success' && data.status === 'OK') {
            $('#api_status').addClass('available');
          } else {
            $('#api_status').removeClass('available');
          }
    });
}