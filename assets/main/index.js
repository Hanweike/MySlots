System.register("chunks:///_virtual/bsdzv2zd.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,r,s;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.director,s=t.Component}],execute:function(){var c;n._RF.push({},"022a06JBWVMX70YppjYbE6W","bsdzv2zd",void 0);var i=o.ccclass;o.property,t("bsdzv2zd",i("bsdzv2zd")(c=function(t){function n(){return t.apply(this,arguments)||this}return e(n,t),n.prototype.onStartGameCLick=function(){this&&this.node&&r.loadScene("scene-2d-002")},n}(s))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/c02ac21a.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,r,i,a,o,c,s,l,u,g;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,c=t.Node,s=t.director,l=t.Tween,u=t.Button,g=t.Component}],execute:function(){var p,d,f,h,v,m,b,y,k;a._RF.push({},"64b603K9mVJHLGukbNIwi3n","c02ac21a",void 0);var B=o.ccclass,w=o.property;t("c02ac21a",(p=B("c02ac21a"),d=w(c),f=w(c),h=w(c),p((b=e((m=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,r(i(e),"gameBtnaaa",b,i(e)),r(i(e),"fvskevsmn",y,i(e)),r(i(e),"gsd6g2sd6rg",k,i(e)),e}n(e,t);var a=e.prototype;return a.clickBack=function(){s.loadScene("scene-2d-001")},a.iuythrbrtr=function(){l.stopAllByTarget(this.node),this.gameBtnaaa.getComponent(u).interactable=!0,this.fvskevsmn.position=this.gsd6g2sd6rg.children[0].position},a.clickStartGame=function(){var t=this,e=Math.floor(20*Math.random())+20,n=1;this.schedule((function(){var e=t.gsd6g2sd6rg.children[n];t.fvskevsmn.position=e.position,(n+=1)==t.gsd6g2sd6rg.children.length&&(n=1)}),.02,e-1,0),this.scheduleOnce((function(){t.iuythrbrtr()}),.02*e+.1)},e}(g)).prototype,"gameBtnaaa",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=e(m.prototype,"fvskevsmn",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(m.prototype,"gsd6g2sd6rg",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=m))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/afv126asf.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,i,r,o,a,c,l,u,s,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,c=t.Node,l=t.director,u=t.tween,s=t.v3,f=t.Component}],execute:function(){var p,h,v,T,d,b,g,x,y;o._RF.push({},"6fcfcIWo6FGjqT56/pqDYUG","afv126asf",void 0);var _=a.ccclass,m=a.property;t("afv126asf",(p=_("afv126asf"),h=m(c),v=m(c),T=m(c),p((g=e((b=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,i(r(e),"xxxTTTTN",g,r(e)),i(r(e),"moveNdoehgujhan",x,r(e)),i(r(e),"local_btn",y,r(e)),e}n(e,t);var o=e.prototype;return o.onLoad=function(){var t=this;this.local_btn.on("click",(function(){t.xxxTTTTN&&l.loadScene("scene-2d-001")}),this)},o.start=function(){this.scheduleOnce(this.hdftgbsrg,0)},o.hdftgbsrg=function(){var t=this;u(this.moveNdoehgujhan).to(1.2,{position:s(1009,0)}).delay(.1).call((function(){t.xxxTTTTN.active=!1,t.local_btn.active=!0})).start()},e}(f)).prototype,"xxxTTTTN",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=e(b.prototype,"moveNdoehgujhan",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=e(b.prototype,"local_btn",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=b))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./bsdzv2zd.ts","./c02ac21a.ts","./afv126asf.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});