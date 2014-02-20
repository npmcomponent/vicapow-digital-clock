
var $ = require('component-jquery')

function DigitalClock(opts){
  var el = this.el = $(require('./template-clock'))
  $('.digit', el).append(require('./template-digit'))
  if(!opts || !opts.seconds){
    $('.minutes-seconds.colon',el).remove()
    $('.seconds.digit-group',el).remove()
    el.removeClass('seconds')
  }
}

DigitalClock.prototype.setHours = function(hours){
  var el = this.el
    , $hour1 = $('.hours .digit1', el)
    , $hour2 = $('.hours .digit2', el)
  updateDigit($hour1, Math.floor( hours / 10))
  updateDigit($hour2, hours % 10)
}

DigitalClock.prototype.setMinutes = function(minutes){
  var el = this.el
    , $min1 = $('.minutes .digit1', el)
    , $min2 = $('.minutes .digit2', el)
  updateDigit($min1, Math.floor( minutes / 10))
  updateDigit($min2, minutes % 10)
}

DigitalClock.prototype.setSeconds = function(seconds){
  var el = this.el
    , $sec1 = $('.seconds .digit1', el)
    , $sec2 = $('.seconds .digit2', el)
  if($sec1.length !== 0 ){
    updateDigit($sec1, Math.floor( seconds / 10))
    updateDigit($sec2, seconds % 10)
  }
}

DigitalClock.prototype.setTime = function(date){
  var el = this.el
  
  this.setHours(date.getHours())
  this.setMinutes(date.getMinutes())
  this.setSeconds(date.getSeconds())
}

function updateDigit($digit, num){
  var digitClass = 'number' + num
  
  // remove the previous digit class, if there was one
  if($digit.data('digit-class')){
    $digit.removeClass($digit.data('digit-class'))
  }
  // add the new digit class
  if(!$digit.hasClass(digitClass) ){
    $digit.addClass(digitClass)
    $digit.data('digit-class', digitClass)
  }
}


module.exports = DigitalClock