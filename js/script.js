jQuery(function ($) {
    var formValid = document.getElementsByClassName('form-valid')[0];
    $('.valid-form-send').click(function () {
        $(this).parents('form').submit(function (e) {
            e.preventDefault();
            var el = document.querySelectorAll('[data-reqired]');
            var erroreArrayElemnts = [];
            var alert = '<p class="alert-error">Заполните, пожалуйста, поле..</p>';
            for (var i = 0; i < el.length; i++) {
                if (el[i].value === '' || el[i].value === ' ' || el[i].value === '-') {
                    erroreArrayElemnts.push(el[i]);
                    if ($(el[i]).parents('.form-input').find('.alert-error').length > 0) {
                        $(el[i]).parents('.form-input').addClass('has-error');
                        $(el[i]).parents('.form-input').find('.alert-error').show();
                    } else {
                        $(alert).appendTo($(el[i]).parents('.form-input .input-cont'));
                        $(el[i]).parents('.form-input').addClass('has-error');
                    }
                    $(el[i]).focus(function (e) {
                        $(e.target).parents('.form-input').removeClass('has-error');
                        $(e.target).parents('.form-input').find('.alert-error').hide();
                    });
                }
            }
            if($('.email').val()){
                if(!validateEmail($('.email').val())){
                    erroreArrayElemnts.push(el[i]);
                    var alertemail = '<p class="alert-email">Вы ввели неверний e-mail!</p>';
                    if ($('.email').parents('.form-input').find('.alert-email').length > 0) {
                        $('.email').parents('.form-input').addClass('has-error');
                        $('.email').parents('.form-input').find('.alert-email').show();
                    } else {
                        $(alertemail).appendTo($('.email').parents('.form-input .input-cont'));
                        $('.email').parents('.form-input').addClass('has-error');
                    }
                    $('.email').focus(function (e) {
                        $(e.target).parents('.form-input').removeClass('has-error');
                        $(e.target).parents('.form-input').find('.alert-email').hide();
                    });
                }
            }
            if(!$('.valid-card').is(':checked')) {
                erroreArrayElemnts.push(el[i]);
                var alert = '<p class="alert-error">Выберите, пожалуйста, карту</p>';
                if ($('.valid-card').parents('.card-group').find('.alert-error').length > 0) {
                    $('.valid-card').parents('.card-group').addClass('has-error');
                    $('.valid-card').parents('.card-group').find('.alert-error').show();
                } else {
                    $(alert).appendTo($('.valid-card').parents('.card-group'));
                    $('.valid-card').parents('.card-group').addClass('has-error');
                }
                $('.valid-card').focus(function (e) {
                    $(e.target).parents('.card-group').removeClass('has-error');
                    $(e.target).parents('.card-group').find('.alert-error').hide();
                });
            }
            if (erroreArrayElemnts.length == 0) {
                formValid.submit();
            }
            if (erroreArrayElemnts.length > 0) {
                console.log('Valid error');
                $("html, body").animate({scrollTop: 0}, "slow");
            }
        });
    });
});
function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
}
