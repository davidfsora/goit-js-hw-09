!function(){var e=document.querySelector('[name="delay"]'),n=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]'),o=document.querySelector(".form");function r(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}o.addEventListener("submit",(function(o){o.preventDefault();for(var c=parseInt(e.value),u=parseInt(n.value),a=parseInt(t.value),m=1;m<=a;m++)r(m,c+(m-1)*u).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))}))}();
//# sourceMappingURL=03-promises.64b314b4.js.map
