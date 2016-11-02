;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M959.697485 552.850383 512.001023 102.691847 64.302515 552.850383 327.791581 552.850383 327.791581 921.308153 696.207395 921.308153 696.207395 552.850383Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiantou1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M546.048 632 546.048 255.744 477.952 255.744 477.952 632 341.632 489.728 341.632 590.336 512 768.256 682.368 590.336 682.368 489.728Z"  ></path>'+
      ''+
      '<path d="M512 8.64C234.048 8.64 8.64 234.048 8.64 512S234.048 1015.36 512 1015.36 1015.36 789.952 1015.36 512 789.952 8.64 512 8.64zM512 984c-260.672 0-472-211.328-472-472 0-260.672 211.328-472 472-472S984 251.328 984 512C984 772.672 772.672 984 512 984z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
