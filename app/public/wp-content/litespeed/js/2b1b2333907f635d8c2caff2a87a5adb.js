var pJS=function(tag_id,params){var canvas_el=document.querySelector('#'+tag_id+' > .particles-js-canvas-el');this.pJS={canvas:{el:canvas_el,w:canvas_el.offsetWidth,h:canvas_el.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:'#fff'},shape:{type:'circle',stroke:{width:0,color:'#ff0000'},polygon:{nb_sides:5},image:{src:'',width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:'#fff',opacity:1,width:1},move:{enable:!0,speed:2,direction:'none',random:!1,straight:!1,out_mode:'out',bounce:!1,attract:{enable:!1,rotateX:3000,rotateY:3000}},array:[]},interactivity:{detect_on:'canvas',events:{onhover:{enable:!0,mode:'grab'},onclick:{enable:!0,mode:'push'},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:0.4},repulse:{distance:200,duration:0.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var pJS=this.pJS;if(params){Object.deepExtend(pJS,params)}
pJS.tmp.obj={size_value:pJS.particles.size.value,size_anim_speed:pJS.particles.size.anim.speed,move_speed:pJS.particles.move.speed,line_linked_distance:pJS.particles.line_linked.distance,line_linked_width:pJS.particles.line_linked.width,mode_grab_distance:pJS.interactivity.modes.grab.distance,mode_bubble_distance:pJS.interactivity.modes.bubble.distance,mode_bubble_size:pJS.interactivity.modes.bubble.size,mode_repulse_distance:pJS.interactivity.modes.repulse.distance};pJS.fn.retinaInit=function(){if(pJS.retina_detect&&window.devicePixelRatio>1){pJS.canvas.pxratio=window.devicePixelRatio;pJS.tmp.retina=!0}else{pJS.canvas.pxratio=1;pJS.tmp.retina=!1}
pJS.canvas.w=pJS.canvas.el.offsetWidth*pJS.canvas.pxratio;pJS.canvas.h=pJS.canvas.el.offsetHeight*pJS.canvas.pxratio;pJS.particles.size.value=pJS.tmp.obj.size_value*pJS.canvas.pxratio;pJS.particles.size.anim.speed=pJS.tmp.obj.size_anim_speed*pJS.canvas.pxratio;pJS.particles.move.speed=pJS.tmp.obj.move_speed*pJS.canvas.pxratio;pJS.particles.line_linked.distance=pJS.tmp.obj.line_linked_distance*pJS.canvas.pxratio;pJS.interactivity.modes.grab.distance=pJS.tmp.obj.mode_grab_distance*pJS.canvas.pxratio;pJS.interactivity.modes.bubble.distance=pJS.tmp.obj.mode_bubble_distance*pJS.canvas.pxratio;pJS.particles.line_linked.width=pJS.tmp.obj.line_linked_width*pJS.canvas.pxratio;pJS.interactivity.modes.bubble.size=pJS.tmp.obj.mode_bubble_size*pJS.canvas.pxratio;pJS.interactivity.modes.repulse.distance=pJS.tmp.obj.mode_repulse_distance*pJS.canvas.pxratio};pJS.fn.canvasInit=function(){pJS.canvas.ctx=pJS.canvas.el.getContext('2d')};pJS.fn.canvasSize=function(){pJS.canvas.el.width=pJS.canvas.w;pJS.canvas.el.height=pJS.canvas.h;if(pJS&&pJS.interactivity.events.resize){window.addEventListener('resize',function(){pJS.canvas.w=pJS.canvas.el.offsetWidth;pJS.canvas.h=pJS.canvas.el.offsetHeight;if(pJS.tmp.retina){pJS.canvas.w*=pJS.canvas.pxratio;pJS.canvas.h*=pJS.canvas.pxratio}
pJS.canvas.el.width=pJS.canvas.w;pJS.canvas.el.height=pJS.canvas.h;if(!pJS.particles.move.enable){pJS.fn.particlesEmpty();pJS.fn.particlesCreate();pJS.fn.particlesDraw();pJS.fn.vendors.densityAutoParticles()}
pJS.fn.vendors.densityAutoParticles()})}};pJS.fn.canvasPaint=function(){pJS.canvas.ctx.fillRect(0,0,pJS.canvas.w,pJS.canvas.h)};pJS.fn.canvasClear=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h)};pJS.fn.particle=function(color,opacity,position){this.radius=(pJS.particles.size.random?Math.random():1)*pJS.particles.size.value;if(pJS.particles.size.anim.enable){this.size_status=!1;this.vs=pJS.particles.size.anim.speed/100;if(!pJS.particles.size.anim.sync){this.vs=this.vs*Math.random()}}
this.x=position?position.x:Math.random()*pJS.canvas.w;this.y=position?position.y:Math.random()*pJS.canvas.h;if(this.x>pJS.canvas.w-this.radius*2)this.x=this.x-this.radius;else if(this.x<this.radius*2)this.x=this.x+this.radius;if(this.y>pJS.canvas.h-this.radius*2)this.y=this.y-this.radius;else if(this.y<this.radius*2)this.y=this.y+this.radius;if(pJS.particles.move.bounce){pJS.fn.vendors.checkOverlap(this,position)}
this.color={};if(typeof(color.value)=='object'){if(color.value instanceof Array){var color_selected=color.value[Math.floor(Math.random()*pJS.particles.color.value.length)];this.color.rgb=hexToRgb(color_selected)}else{if(color.value.r!=undefined&&color.value.g!=undefined&&color.value.b!=undefined){this.color.rgb={r:color.value.r,g:color.value.g,b:color.value.b}}
if(color.value.h!=undefined&&color.value.s!=undefined&&color.value.l!=undefined){this.color.hsl={h:color.value.h,s:color.value.s,l:color.value.l}}}}else if(color.value=='random'){this.color.rgb={r:(Math.floor(Math.random()*(255-0+1))+0),g:(Math.floor(Math.random()*(255-0+1))+0),b:(Math.floor(Math.random()*(255-0+1))+0)}}else if(typeof(color.value)=='string'){this.color=color;this.color.rgb=hexToRgb(this.color.value)}
this.opacity=(pJS.particles.opacity.random?Math.random():1)*pJS.particles.opacity.value;if(pJS.particles.opacity.anim.enable){this.opacity_status=!1;this.vo=pJS.particles.opacity.anim.speed/100;if(!pJS.particles.opacity.anim.sync){this.vo=this.vo*Math.random()}}
var velbase={}
switch(pJS.particles.move.direction){case 'top':velbase={x:0,y:-1};break;case 'top-right':velbase={x:0.5,y:-0.5};break;case 'right':velbase={x:1,y:-0};break;case 'bottom-right':velbase={x:0.5,y:0.5};break;case 'bottom':velbase={x:0,y:1};break;case 'bottom-left':velbase={x:-0.5,y:1};break;case 'left':velbase={x:-1,y:0};break;case 'top-left':velbase={x:-0.5,y:-0.5};break;default:velbase={x:0,y:0};break}
if(pJS.particles.move.straight){this.vx=velbase.x;this.vy=velbase.y;if(pJS.particles.move.random){this.vx=this.vx*(Math.random());this.vy=this.vy*(Math.random())}}else{this.vx=velbase.x+Math.random()-0.5;this.vy=velbase.y+Math.random()-0.5}
this.vx_i=this.vx;this.vy_i=this.vy;var shape_type=pJS.particles.shape.type;if(typeof(shape_type)=='object'){if(shape_type instanceof Array){var shape_selected=shape_type[Math.floor(Math.random()*shape_type.length)];this.shape=shape_selected}}else{this.shape=shape_type}
if(this.shape=='image'){var sh=pJS.particles.shape;this.img={src:sh.image.src,ratio:sh.image.width/sh.image.height}
if(!this.img.ratio)this.img.ratio=1;if(pJS.tmp.img_type=='svg'&&pJS.tmp.source_svg!=undefined){pJS.fn.vendors.createSvgImg(this);if(pJS.tmp.pushing){this.img.loaded=!1}}}};pJS.fn.particle.prototype.draw=function(){var p=this;if(p.radius_bubble!=undefined){var radius=p.radius_bubble}else{var radius=p.radius}
if(p.opacity_bubble!=undefined){var opacity=p.opacity_bubble}else{var opacity=p.opacity}
if(p.color.rgb){var color_value='rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')'}else{var color_value='hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')'}
pJS.canvas.ctx.fillStyle=color_value;pJS.canvas.ctx.beginPath();switch(p.shape){case 'circle':pJS.canvas.ctx.arc(p.x,p.y,radius,0,Math.PI*2,!1);break;case 'edge':pJS.canvas.ctx.rect(p.x-radius,p.y-radius,radius*2,radius*2);break;case 'triangle':pJS.fn.vendors.drawShape(pJS.canvas.ctx,p.x-radius,p.y+radius/1.66,radius*2,3,2);break;case 'polygon':pJS.fn.vendors.drawShape(pJS.canvas.ctx,p.x-radius/(pJS.particles.shape.polygon.nb_sides/3.5),p.y-radius/(2.66/3.5),radius*2.66/(pJS.particles.shape.polygon.nb_sides/3),pJS.particles.shape.polygon.nb_sides,1);break;case 'star':pJS.fn.vendors.drawShape(pJS.canvas.ctx,p.x-radius*2/(pJS.particles.shape.polygon.nb_sides/4),p.y-radius/(2*2.66/3.5),radius*2*2.66/(pJS.particles.shape.polygon.nb_sides/3),pJS.particles.shape.polygon.nb_sides,2);break;case 'image':function draw(){pJS.canvas.ctx.drawImage(img_obj,p.x-radius,p.y-radius,radius*2,radius*2/p.img.ratio)}
if(pJS.tmp.img_type=='svg'){var img_obj=p.img.obj}else{var img_obj=pJS.tmp.img_obj}
if(img_obj){draw()}
break}
pJS.canvas.ctx.closePath();if(pJS.particles.shape.stroke.width>0){pJS.canvas.ctx.strokeStyle=pJS.particles.shape.stroke.color;pJS.canvas.ctx.lineWidth=pJS.particles.shape.stroke.width;pJS.canvas.ctx.stroke()}
pJS.canvas.ctx.fill()};pJS.fn.particlesCreate=function(){for(var i=0;i<pJS.particles.number.value;i++){pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color,pJS.particles.opacity.value))}};pJS.fn.particlesUpdate=function(){for(var i=0;i<pJS.particles.array.length;i++){var p=pJS.particles.array[i];if(pJS.particles.move.enable){var ms=pJS.particles.move.speed/2;p.x+=p.vx*ms;p.y+=p.vy*ms}
if(pJS.particles.opacity.anim.enable){if(p.opacity_status==!0){if(p.opacity>=pJS.particles.opacity.value)p.opacity_status=!1;p.opacity+=p.vo}else{if(p.opacity<=pJS.particles.opacity.anim.opacity_min)p.opacity_status=!0;p.opacity-=p.vo}
if(p.opacity<0)p.opacity=0}
if(pJS.particles.size.anim.enable){if(p.size_status==!0){if(p.radius>=pJS.particles.size.value)p.size_status=!1;p.radius+=p.vs}else{if(p.radius<=pJS.particles.size.anim.size_min)p.size_status=!0;p.radius-=p.vs}
if(p.radius<0)p.radius=0}
if(pJS.particles.move.out_mode=='bounce'){var new_pos={x_left:p.radius,x_right:pJS.canvas.w,y_top:p.radius,y_bottom:pJS.canvas.h}}else{var new_pos={x_left:-p.radius,x_right:pJS.canvas.w+p.radius,y_top:-p.radius,y_bottom:pJS.canvas.h+p.radius}}
if(p.x-p.radius>pJS.canvas.w){p.x=new_pos.x_left;p.y=Math.random()*pJS.canvas.h}else if(p.x+p.radius<0){p.x=new_pos.x_right;p.y=Math.random()*pJS.canvas.h}
if(p.y-p.radius>pJS.canvas.h){p.y=new_pos.y_top;p.x=Math.random()*pJS.canvas.w}else if(p.y+p.radius<0){p.y=new_pos.y_bottom;p.x=Math.random()*pJS.canvas.w}
switch(pJS.particles.move.out_mode){case 'bounce':if(p.x+p.radius>pJS.canvas.w)p.vx=-p.vx;else if(p.x-p.radius<0)p.vx=-p.vx;if(p.y+p.radius>pJS.canvas.h)p.vy=-p.vy;else if(p.y-p.radius<0)p.vy=-p.vy;break}
if(isInArray('grab',pJS.interactivity.events.onhover.mode)){pJS.fn.modes.grabParticle(p)}
if(isInArray('bubble',pJS.interactivity.events.onhover.mode)||isInArray('bubble',pJS.interactivity.events.onclick.mode)){pJS.fn.modes.bubbleParticle(p)}
if(isInArray('repulse',pJS.interactivity.events.onhover.mode)||isInArray('repulse',pJS.interactivity.events.onclick.mode)){pJS.fn.modes.repulseParticle(p)}
if(pJS.particles.line_linked.enable||pJS.particles.move.attract.enable){for(var j=i+1;j<pJS.particles.array.length;j++){var p2=pJS.particles.array[j];if(pJS.particles.line_linked.enable){pJS.fn.interact.linkParticles(p,p2)}
if(pJS.particles.move.attract.enable){pJS.fn.interact.attractParticles(p,p2)}
if(pJS.particles.move.bounce){pJS.fn.interact.bounceParticles(p,p2)}}}}};pJS.fn.particlesDraw=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h);pJS.fn.particlesUpdate();for(var i=0;i<pJS.particles.array.length;i++){var p=pJS.particles.array[i];p.draw()}};pJS.fn.particlesEmpty=function(){pJS.particles.array=[]};pJS.fn.particlesRefresh=function(){cancelRequestAnimFrame(pJS.fn.checkAnimFrame);cancelRequestAnimFrame(pJS.fn.drawAnimFrame);pJS.tmp.source_svg=undefined;pJS.tmp.img_obj=undefined;pJS.tmp.count_svg=0;pJS.fn.particlesEmpty();pJS.fn.canvasClear();pJS.fn.vendors.start()};pJS.fn.interact.linkParticles=function(p1,p2){var dx=p1.x-p2.x,dy=p1.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<=pJS.particles.line_linked.distance){var opacity_line=pJS.particles.line_linked.opacity-(dist/(1/pJS.particles.line_linked.opacity))/pJS.particles.line_linked.distance;if(opacity_line>0){var color_line=pJS.particles.line_linked.color_rgb_line;pJS.canvas.ctx.strokeStyle='rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width;pJS.canvas.ctx.beginPath();pJS.canvas.ctx.moveTo(p1.x,p1.y);pJS.canvas.ctx.lineTo(p2.x,p2.y);pJS.canvas.ctx.stroke();pJS.canvas.ctx.closePath()}}};pJS.fn.interact.attractParticles=function(p1,p2){var dx=p1.x-p2.x,dy=p1.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<=pJS.particles.line_linked.distance){var ax=dx/(pJS.particles.move.attract.rotateX*1000),ay=dy/(pJS.particles.move.attract.rotateY*1000);p1.vx-=ax;p1.vy-=ay;p2.vx+=ax;p2.vy+=ay}}
pJS.fn.interact.bounceParticles=function(p1,p2){var dx=p1.x-p2.x,dy=p1.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy),dist_p=p1.radius+p2.radius;if(dist<=dist_p){p1.vx=-p1.vx;p1.vy=-p1.vy;p2.vx=-p2.vx;p2.vy=-p2.vy}}
pJS.fn.modes.pushParticles=function(nb,pos){pJS.tmp.pushing=!0;for(var i=0;i<nb;i++){pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color,pJS.particles.opacity.value,{'x':pos?pos.pos_x:Math.random()*pJS.canvas.w,'y':pos?pos.pos_y:Math.random()*pJS.canvas.h}))
if(i==nb-1){if(!pJS.particles.move.enable){pJS.fn.particlesDraw()}
pJS.tmp.pushing=!1}}};pJS.fn.modes.removeParticles=function(nb){pJS.particles.array.splice(0,nb);if(!pJS.particles.move.enable){pJS.fn.particlesDraw()}};pJS.fn.modes.bubbleParticle=function(p){if(pJS.interactivity.events.onhover.enable&&isInArray('bubble',pJS.interactivity.events.onhover.mode)){var dx_mouse=p.x-pJS.interactivity.mouse.pos_x,dy_mouse=p.y-pJS.interactivity.mouse.pos_y,dist_mouse=Math.sqrt(dx_mouse*dx_mouse+dy_mouse*dy_mouse),ratio=1-dist_mouse/pJS.interactivity.modes.bubble.distance;function init(){p.opacity_bubble=p.opacity;p.radius_bubble=p.radius}
if(dist_mouse<=pJS.interactivity.modes.bubble.distance){if(ratio>=0&&pJS.interactivity.status=='mousemove'){if(pJS.interactivity.modes.bubble.size!=pJS.particles.size.value){if(pJS.interactivity.modes.bubble.size>pJS.particles.size.value){var size=p.radius+(pJS.interactivity.modes.bubble.size*ratio);if(size>=0){p.radius_bubble=size}}else{var dif=p.radius-pJS.interactivity.modes.bubble.size,size=p.radius-(dif*ratio);if(size>0){p.radius_bubble=size}else{p.radius_bubble=0}}}
if(pJS.interactivity.modes.bubble.opacity!=pJS.particles.opacity.value){if(pJS.interactivity.modes.bubble.opacity>pJS.particles.opacity.value){var opacity=pJS.interactivity.modes.bubble.opacity*ratio;if(opacity>p.opacity&&opacity<=pJS.interactivity.modes.bubble.opacity){p.opacity_bubble=opacity}}else{var opacity=p.opacity-(pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;if(opacity<p.opacity&&opacity>=pJS.interactivity.modes.bubble.opacity){p.opacity_bubble=opacity}}}}}else{init()}
if(pJS.interactivity.status=='mouseleave'){init()}}else if(pJS.interactivity.events.onclick.enable&&isInArray('bubble',pJS.interactivity.events.onclick.mode)){if(pJS.tmp.bubble_clicking){var dx_mouse=p.x-pJS.interactivity.mouse.click_pos_x,dy_mouse=p.y-pJS.interactivity.mouse.click_pos_y,dist_mouse=Math.sqrt(dx_mouse*dx_mouse+dy_mouse*dy_mouse),time_spent=(new Date().getTime()-pJS.interactivity.mouse.click_time)/1000;if(time_spent>pJS.interactivity.modes.bubble.duration){pJS.tmp.bubble_duration_end=!0}
if(time_spent>pJS.interactivity.modes.bubble.duration*2){pJS.tmp.bubble_clicking=!1;pJS.tmp.bubble_duration_end=!1}}
function process(bubble_param,particles_param,p_obj_bubble,p_obj,id){if(bubble_param!=particles_param){if(!pJS.tmp.bubble_duration_end){if(dist_mouse<=pJS.interactivity.modes.bubble.distance){if(p_obj_bubble!=undefined)var obj=p_obj_bubble;else var obj=p_obj;if(obj!=bubble_param){var value=p_obj-(time_spent*(p_obj-bubble_param)/pJS.interactivity.modes.bubble.duration);if(id=='size')p.radius_bubble=value;if(id=='opacity')p.opacity_bubble=value}}else{if(id=='size')p.radius_bubble=undefined;if(id=='opacity')p.opacity_bubble=undefined}}else{if(p_obj_bubble!=undefined){var value_tmp=p_obj-(time_spent*(p_obj-bubble_param)/pJS.interactivity.modes.bubble.duration),dif=bubble_param-value_tmp;value=bubble_param+dif;if(id=='size')p.radius_bubble=value;if(id=='opacity')p.opacity_bubble=value}}}}
if(pJS.tmp.bubble_clicking){process(pJS.interactivity.modes.bubble.size,pJS.particles.size.value,p.radius_bubble,p.radius,'size');process(pJS.interactivity.modes.bubble.opacity,pJS.particles.opacity.value,p.opacity_bubble,p.opacity,'opacity')}}};pJS.fn.modes.repulseParticle=function(p){if(pJS.interactivity.events.onhover.enable&&isInArray('repulse',pJS.interactivity.events.onhover.mode)&&pJS.interactivity.status=='mousemove'){var dx_mouse=p.x-pJS.interactivity.mouse.pos_x,dy_mouse=p.y-pJS.interactivity.mouse.pos_y,dist_mouse=Math.sqrt(dx_mouse*dx_mouse+dy_mouse*dy_mouse);var normVec={x:dx_mouse/dist_mouse,y:dy_mouse/dist_mouse},repulseRadius=pJS.interactivity.modes.repulse.distance,velocity=100,repulseFactor=clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity,0,50);var pos={x:p.x+normVec.x*repulseFactor,y:p.y+normVec.y*repulseFactor}
if(pJS.particles.move.out_mode=='bounce'){if(pos.x-p.radius>0&&pos.x+p.radius<pJS.canvas.w)p.x=pos.x;if(pos.y-p.radius>0&&pos.y+p.radius<pJS.canvas.h)p.y=pos.y}else{p.x=pos.x;p.y=pos.y}}else if(pJS.interactivity.events.onclick.enable&&isInArray('repulse',pJS.interactivity.events.onclick.mode)){if(!pJS.tmp.repulse_finish){pJS.tmp.repulse_count++;if(pJS.tmp.repulse_count==pJS.particles.array.length){pJS.tmp.repulse_finish=!0}}
if(pJS.tmp.repulse_clicking){var repulseRadius=Math.pow(pJS.interactivity.modes.repulse.distance/6,3);var dx=pJS.interactivity.mouse.click_pos_x-p.x,dy=pJS.interactivity.mouse.click_pos_y-p.y,d=dx*dx+dy*dy;var force=-repulseRadius/d*1;function process(){var f=Math.atan2(dy,dx);p.vx=force*Math.cos(f);p.vy=force*Math.sin(f);if(pJS.particles.move.out_mode=='bounce'){var pos={x:p.x+p.vx,y:p.y+p.vy}
if(pos.x+p.radius>pJS.canvas.w)p.vx=-p.vx;else if(pos.x-p.radius<0)p.vx=-p.vx;if(pos.y+p.radius>pJS.canvas.h)p.vy=-p.vy;else if(pos.y-p.radius<0)p.vy=-p.vy}}
if(d<=repulseRadius){process()}}else{if(pJS.tmp.repulse_clicking==!1){p.vx=p.vx_i;p.vy=p.vy_i}}}}
pJS.fn.modes.grabParticle=function(p){if(pJS.interactivity.events.onhover.enable&&pJS.interactivity.status=='mousemove'){var dx_mouse=p.x-pJS.interactivity.mouse.pos_x,dy_mouse=p.y-pJS.interactivity.mouse.pos_y,dist_mouse=Math.sqrt(dx_mouse*dx_mouse+dy_mouse*dy_mouse);if(dist_mouse<=pJS.interactivity.modes.grab.distance){var opacity_line=pJS.interactivity.modes.grab.line_linked.opacity-(dist_mouse/(1/pJS.interactivity.modes.grab.line_linked.opacity))/pJS.interactivity.modes.grab.distance;if(opacity_line>0){var color_line=pJS.particles.line_linked.color_rgb_line;pJS.canvas.ctx.strokeStyle='rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width;pJS.canvas.ctx.beginPath();pJS.canvas.ctx.moveTo(p.x,p.y);pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x,pJS.interactivity.mouse.pos_y);pJS.canvas.ctx.stroke();pJS.canvas.ctx.closePath()}}}};pJS.fn.vendors.eventsListeners=function(){if(pJS.interactivity.detect_on=='window'){pJS.interactivity.el=window}else{pJS.interactivity.el=pJS.canvas.el}
if(pJS.interactivity.events.onhover.enable||pJS.interactivity.events.onclick.enable){pJS.interactivity.el.addEventListener('mousemove',function(e){if(pJS.interactivity.el==window){var pos_x=e.clientX,pos_y=e.clientY}else{var pos_x=e.offsetX||e.clientX,pos_y=e.offsetY||e.clientY}
pJS.interactivity.mouse.pos_x=pos_x;pJS.interactivity.mouse.pos_y=pos_y;if(pJS.tmp.retina){pJS.interactivity.mouse.pos_x*=pJS.canvas.pxratio;pJS.interactivity.mouse.pos_y*=pJS.canvas.pxratio}
pJS.interactivity.status='mousemove'});pJS.interactivity.el.addEventListener('mouseleave',function(e){pJS.interactivity.mouse.pos_x=null;pJS.interactivity.mouse.pos_y=null;pJS.interactivity.status='mouseleave'})}
if(pJS.interactivity.events.onclick.enable){pJS.interactivity.el.addEventListener('click',function(){pJS.interactivity.mouse.click_pos_x=pJS.interactivity.mouse.pos_x;pJS.interactivity.mouse.click_pos_y=pJS.interactivity.mouse.pos_y;pJS.interactivity.mouse.click_time=new Date().getTime();if(pJS.interactivity.events.onclick.enable){switch(pJS.interactivity.events.onclick.mode){case 'push':if(pJS.particles.move.enable){pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb,pJS.interactivity.mouse)}else{if(pJS.interactivity.modes.push.particles_nb==1){pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb,pJS.interactivity.mouse)}else if(pJS.interactivity.modes.push.particles_nb>1){pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb)}}
break;case 'remove':pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);break;case 'bubble':pJS.tmp.bubble_clicking=!0;break;case 'repulse':pJS.tmp.repulse_clicking=!0;pJS.tmp.repulse_count=0;pJS.tmp.repulse_finish=!1;setTimeout(function(){pJS.tmp.repulse_clicking=!1},pJS.interactivity.modes.repulse.duration*1000)
break}}})}};pJS.fn.vendors.densityAutoParticles=function(){if(pJS.particles.number.density.enable){var area=pJS.canvas.el.width*pJS.canvas.el.height/1000;if(pJS.tmp.retina){area=area/(pJS.canvas.pxratio*2)}
var nb_particles=area*pJS.particles.number.value/pJS.particles.number.density.value_area;var missing_particles=pJS.particles.array.length-nb_particles;if(missing_particles<0)pJS.fn.modes.pushParticles(Math.abs(missing_particles));else pJS.fn.modes.removeParticles(missing_particles)}};pJS.fn.vendors.checkOverlap=function(p1,position){for(var i=0;i<pJS.particles.array.length;i++){var p2=pJS.particles.array[i];var dx=p1.x-p2.x,dy=p1.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<=p1.radius+p2.radius){p1.x=position?position.x:Math.random()*pJS.canvas.w;p1.y=position?position.y:Math.random()*pJS.canvas.h;pJS.fn.vendors.checkOverlap(p1)}}};pJS.fn.vendors.createSvgImg=function(p){var svgXml=pJS.tmp.source_svg,rgbHex=/#([0-9A-F]{3,6})/gi,coloredSvgXml=svgXml.replace(rgbHex,function(m,r,g,b){if(p.color.rgb){var color_value='rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')'}else{var color_value='hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')'}
return color_value});var svg=new Blob([coloredSvgXml],{type:'image/svg+xml;charset=utf-8'}),DOMURL=window.URL||window.webkitURL||window,url=DOMURL.createObjectURL(svg);var img=new Image();img.addEventListener('load',function(){p.img.obj=img;p.img.loaded=!0;DOMURL.revokeObjectURL(url);pJS.tmp.count_svg++});img.src=url};pJS.fn.vendors.destroypJS=function(){cancelAnimationFrame(pJS.fn.drawAnimFrame);canvas_el.remove();pJSDom=null};pJS.fn.vendors.drawShape=function(c,startX,startY,sideLength,sideCountNumerator,sideCountDenominator){var sideCount=sideCountNumerator*sideCountDenominator;var decimalSides=sideCountNumerator/sideCountDenominator;var interiorAngleDegrees=(180*(decimalSides-2))/decimalSides;var interiorAngle=Math.PI-Math.PI*interiorAngleDegrees/180;c.save();c.beginPath();c.translate(startX,startY);c.moveTo(0,0);for(var i=0;i<sideCount;i++){c.lineTo(sideLength,0);c.translate(sideLength,0);c.rotate(interiorAngle)}
c.fill();c.restore()};pJS.fn.vendors.exportImg=function(){window.open(pJS.canvas.el.toDataURL('image/png'),'_blank')};pJS.fn.vendors.loadImg=function(type){pJS.tmp.img_error=undefined;if(pJS.particles.shape.image.src!=''){if(type=='svg'){var xhr=new XMLHttpRequest();xhr.open('GET',pJS.particles.shape.image.src);xhr.onreadystatechange=function(data){if(xhr.readyState==4){if(xhr.status==200){pJS.tmp.source_svg=data.currentTarget.response;pJS.fn.vendors.checkBeforeDraw()}else{console.log('Error pJS - Image not found');pJS.tmp.img_error=!0}}}
xhr.send()}else{var img=new Image();img.addEventListener('load',function(){pJS.tmp.img_obj=img;pJS.fn.vendors.checkBeforeDraw()});img.src=pJS.particles.shape.image.src}}else{console.log('Error pJS - No image.src');pJS.tmp.img_error=!0}};pJS.fn.vendors.draw=function(){if(pJS.particles.shape.type=='image'){if(pJS.tmp.img_type=='svg'){if(pJS.tmp.count_svg>=pJS.particles.number.value){pJS.fn.particlesDraw();if(!pJS.particles.move.enable)cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}else{if(!pJS.tmp.img_error)pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}}else{if(pJS.tmp.img_obj!=undefined){pJS.fn.particlesDraw();if(!pJS.particles.move.enable)cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}else{if(!pJS.tmp.img_error)pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}}}else{pJS.fn.particlesDraw();if(!pJS.particles.move.enable)cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}};pJS.fn.vendors.checkBeforeDraw=function(){if(pJS.particles.shape.type=='image'){if(pJS.tmp.img_type=='svg'&&pJS.tmp.source_svg==undefined){pJS.tmp.checkAnimFrame=requestAnimFrame(check)}else{cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);if(!pJS.tmp.img_error){pJS.fn.vendors.init();pJS.fn.vendors.draw()}}}else{pJS.fn.vendors.init();pJS.fn.vendors.draw()}};pJS.fn.vendors.init=function(){pJS.fn.retinaInit();pJS.fn.canvasInit();pJS.fn.canvasSize();pJS.fn.canvasPaint();pJS.fn.particlesCreate();pJS.fn.vendors.densityAutoParticles();pJS.particles.line_linked.color_rgb_line=hexToRgb(pJS.particles.line_linked.color)};pJS.fn.vendors.start=function(){if(isInArray('image',pJS.particles.shape.type)){pJS.tmp.img_type=pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length-3);pJS.fn.vendors.loadImg(pJS.tmp.img_type)}else{pJS.fn.vendors.checkBeforeDraw()}};pJS.fn.vendors.eventsListeners();pJS.fn.vendors.start()};Object.deepExtend=function(destination,source){for(var property in source){if(source[property]&&source[property].constructor&&source[property].constructor===Object){destination[property]=destination[property]||{};arguments.callee(destination[property],source[property])}else{destination[property]=source[property]}}
return destination};window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60)}})();window.cancelRequestAnimFrame=(function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout})();function hexToRgb(hex){var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex.replace(shorthandRegex,function(m,r,g,b){return r+r+g+g+b+b});var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:null};function clamp(number,min,max){return Math.min(Math.max(number,min),max)};function isInArray(value,array){return array.indexOf(value)>-1}
window.pJSDom=[];window.particlesJS=function(tag_id,params){if(typeof(tag_id)!='string'){params=tag_id;tag_id='particles-js'}
if(!tag_id){tag_id='particles-js'}
var pJS_tag=document.getElementById(tag_id),pJS_canvas_class='particles-js-canvas-el',exist_canvas=pJS_tag.getElementsByClassName(pJS_canvas_class);if(exist_canvas.length){while(exist_canvas.length>0){pJS_tag.removeChild(exist_canvas[0])}}
var canvas_el=document.createElement('canvas');canvas_el.className=pJS_canvas_class;canvas_el.style.width="100%";canvas_el.style.height="100%";var canvas=document.getElementById(tag_id).appendChild(canvas_el);if(canvas!=null){pJSDom.push(new pJS(tag_id,params))}};window.particlesJS.load=function(tag_id,path_config_json,callback){var xhr=new XMLHttpRequest();xhr.open('GET',path_config_json);xhr.onreadystatechange=function(data){if(xhr.readyState==4){if(xhr.status==200){var params=JSON.parse(data.currentTarget.response);window.particlesJS(tag_id,params);if(callback)callback()}else{console.log('Error pJS - XMLHttpRequest status: '+xhr.status);console.log('Error pJS - File config not found')}}};xhr.send()}
;/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.7
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLiteSpeedLoaded",e)}},function(t,e,n){!function(e){e="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};t.exports=e}.call(this,n(4))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},,,,,,function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";n.r(t);var t=n(2),t=n.n(t),i=n(3),a=n(12);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o,l=i.window.jarallax;i.window.jarallax=a.default,i.window.jarallax.noConflict=function(){return i.window.jarallax=l,this},void 0!==i.jQuery&&((n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Array.prototype.unshift.call(t,this);var o=a.default.apply(i.window,t);return"object"!==r(o)?o:this}).constructor=a.default.constructor,o=i.jQuery.fn.jarallax,i.jQuery.fn.jarallax=n,i.jQuery.fn.jarallax.noConflict=function(){return i.jQuery.fn.jarallax=o,this}),t()(function(){Object(a.default)(document.querySelectorAll("[data-jarallax]"))})},function(e,t,n){"use strict";n.r(t);var o=n(2),o=n.n(o),f=n(3);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var o,i,a=[],r=!0,l=!1;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){l=!0,i=e}finally{try{r||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r,g,u=f.window.navigator,p=-1<u.userAgent.indexOf("MSIE ")||-1<u.userAgent.indexOf("Trident/")||-1<u.userAgent.indexOf("Edge/"),l=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(u.userAgent),d=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),n=0;n<e.length;n+=1)if(t&&void 0!==t.style[e[n]])return e[n];return!1}();function m(){g=l?(!r&&document.body&&((r=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(r)),(r?r.clientHeight:0)||f.window.innerHeight||document.documentElement.clientHeight):f.window.innerHeight||document.documentElement.clientHeight}m(),f.window.addEventListener("resize",m),f.window.addEventListener("orientationchange",m),f.window.addEventListener("load",m),o()(function(){m()});var y=[];function b(){y.length&&(y.forEach(function(e,t){var n=e.instance,o=e.oldData,i=n.$item.getBoundingClientRect(),e={width:i.width,height:i.height,top:i.top,bottom:i.bottom,wndW:f.window.innerWidth,wndH:g},i=!o||o.wndW!==e.wndW||o.wndH!==e.wndH||o.width!==e.width||o.height!==e.height,o=i||!o||o.top!==e.top||o.bottom!==e.bottom;y[t].oldData=e,i&&n.onResize(),o&&n.onScroll()}),f.window.requestAnimationFrame(b))}var h=0,v=function(){function l(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var n=this;n.instanceID=h,h+=1,n.$item=e,n.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var o,i,a=n.$item.dataset||{},r={};Object.keys(a).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==n.defaults[t]&&(r[t]=a[e])}),n.options=n.extend({},n.defaults,r,t),n.pureOptions=n.extend({},n.options),Object.keys(n.options).forEach(function(e){"true"===n.options[e]?n.options[e]=!0:"false"===n.options[e]&&(n.options[e]=!1)}),n.options.speed=Math.min(2,Math.max(-1,parseFloat(n.options.speed))),"string"==typeof n.options.disableParallax&&(n.options.disableParallax=new RegExp(n.options.disableParallax)),n.options.disableParallax instanceof RegExp&&(o=n.options.disableParallax,n.options.disableParallax=function(){return o.test(u.userAgent)}),"function"!=typeof n.options.disableParallax&&(n.options.disableParallax=function(){return!1}),"string"==typeof n.options.disableVideo&&(n.options.disableVideo=new RegExp(n.options.disableVideo)),n.options.disableVideo instanceof RegExp&&(i=n.options.disableVideo,n.options.disableVideo=function(){return i.test(u.userAgent)}),"function"!=typeof n.options.disableVideo&&(n.options.disableVideo=function(){return!1});t=n.options.elementInViewport;(t=t&&"object"===c(t)&&void 0!==t.length?s(t,1)[0]:t)instanceof Element||(t=null),n.options.elementInViewport=t,n.image={src:n.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(u.userAgent)?"absolute":"fixed"},n.initImg()&&n.canInitParallax()&&n.init()}var e,t,n;return e=l,(t=[{key:"css",value:function(t,n){return"string"==typeof n?f.window.getComputedStyle(t).getPropertyValue(n):(n.transform&&d&&(n[d]=n.transform),Object.keys(n).forEach(function(e){t.style[e]=n[e]}),t)}},{key:"extend",value:function(n){for(var e=arguments.length,o=new Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return n=n||{},Object.keys(o).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){n[e]=o[t][e]})}),n}},{key:"getWindowData",value:function(){return{width:f.window.innerWidth||document.documentElement.clientWidth,height:g,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return(t=t&&"string"==typeof t?e.$item.querySelector(t):t)instanceof Element||(e.options.imgSrc?(t=new Image).src=e.options.imgSrc:t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!(!e.image.bgImage||"none"===e.image.bgImage))}},{key:"canInitParallax",value:function(){return d&&!this.options.disableParallax()}},{key:"init",value:function(){var e,t=this,n={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},o={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity"};t.options.keepImg||((e=t.$item.getAttribute("style"))&&t.$item.setAttribute("data-jarallax-original-styles",e),!t.image.useImgTag||(e=t.image.$item.getAttribute("style"))&&t.image.$item.setAttribute("data-jarallax-original-styles",e)),"static"===t.css(t.$item,"position")&&t.css(t.$item,{position:"relative"}),"auto"===t.css(t.$item,"z-index")&&t.css(t.$item,{zIndex:0}),t.image.$container=document.createElement("div"),t.css(t.image.$container,n),t.css(t.image.$container,{"z-index":t.options.zIndex}),p&&t.css(t.image.$container,{opacity:.9999}),t.image.$container.setAttribute("id","jarallax-container-".concat(t.instanceID)),t.$item.appendChild(t.image.$container),t.image.useImgTag?o=t.extend({"object-fit":t.options.imgSize,"object-position":t.options.imgPosition,"font-family":"object-fit: ".concat(t.options.imgSize,"; object-position: ").concat(t.options.imgPosition,";"),"max-width":"none"},n,o):(t.image.$item=document.createElement("div"),t.image.src&&(o=t.extend({"background-position":t.options.imgPosition,"background-size":t.options.imgSize,"background-repeat":t.options.imgRepeat,"background-image":t.image.bgImage||'url("'.concat(t.image.src,'")')},n,o))),"opacity"!==t.options.type&&"scale"!==t.options.type&&"scale-opacity"!==t.options.type&&1!==t.options.speed||(t.image.position="absolute"),"fixed"===t.image.position&&(n=function(e){for(var t=[];null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(t.$item).filter(function(e){var t=f.window.getComputedStyle(e),e=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return e&&"none"!==e||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])}),t.image.position=n.length?"absolute":"fixed"),o.position=t.image.position,t.css(t.image.$item,o),t.image.$container.appendChild(t.image.$item),t.onResize(),t.onScroll(!0),t.options.onInit&&t.options.onInit.call(t),"none"!==t.css(t.$item,"background-image")&&t.css(t.$item,{"background-image":"none"}),t.addToParallaxList()}},{key:"addToParallaxList",value:function(){y.push({instance:this}),1===y.length&&f.window.requestAnimationFrame(b)}},{key:"removeFromParallaxList",value:function(){var n=this;y.forEach(function(e,t){e.instance.instanceID===n.instanceID&&y.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t,n=e.$item.getAttribute("data-jarallax-original-styles");e.$item.removeAttribute("data-jarallax-original-styles"),n?e.$item.setAttribute("style",n):e.$item.removeAttribute("style"),e.image.useImgTag&&(t=e.image.$item.getAttribute("data-jarallax-original-styles"),e.image.$item.removeAttribute("data-jarallax-original-styles"),t?e.image.$item.setAttribute("style",n):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)),e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){var e,t,n;"fixed"===this.image.position&&(t=(n=(e=this).image.$container.getBoundingClientRect()).width,n=n.height,e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-".concat(e.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)),n="#jarallax-container-".concat(e.instanceID," {\n            clip: rect(0 ").concat(t,"px ").concat(n,"px 0);\n            clip: rect(0, ").concat(t,"px, ").concat(n,"px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"),e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=n:e.$clipStyles.innerHTML=n)}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.height,o=e.options.speed,i="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=n,l=0;return i&&(o<0?(a=o*Math.max(n,g),g<n&&(a-=o*(n-g))):a=o*(n+g),1<o?r=Math.abs(a-g):o<0?r=a/o+Math.abs(a):r+=(g-n)*(1-o),a/=2),e.parallaxScrollDistance=a,l=i?(g-r)/2:(n-r)/2,e.css(e.image.$item,{height:"".concat(r,"px"),marginTop:"".concat(l,"px"),left:"fixed"===e.image.position?"".concat(t.left,"px"):"0",width:"".concat(t.width,"px")}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t,n,o,i,a,r,l,s=this,c=s.$item.getBoundingClientRect(),u=c.top,p=c.height,d={},m=c;s.options.elementInViewport&&(m=s.options.elementInViewport.getBoundingClientRect()),s.isElementInViewport=0<=m.bottom&&0<=m.right&&m.top<=g&&m.left<=f.window.innerWidth,(e||s.isElementInViewport)&&(t=Math.max(0,u),n=Math.max(0,p+u),o=Math.max(0,-u),i=Math.max(0,u+p-g),a=Math.max(0,p-(u+p-g)),r=Math.max(0,-u+g-p),m=1-(g-u)/(g+p)*2,e=1,p<g?e=1-(o||i)/p:n<=g?e=n/g:a<=g&&(e=a/g),"opacity"!==s.options.type&&"scale-opacity"!==s.options.type&&"scroll-opacity"!==s.options.type||(d.transform="translate3d(0,0,0)",d.opacity=e),"scale"!==s.options.type&&"scale-opacity"!==s.options.type||(l=1,s.options.speed<0?l-=s.options.speed*e:l+=s.options.speed*(1-e),d.transform="scale(".concat(l,") translate3d(0,0,0)")),"scroll"!==s.options.type&&"scroll-opacity"!==s.options.type||(l=s.parallaxScrollDistance*m,"absolute"===s.image.position&&(l-=u),d.transform="translate3d(0,".concat(l,"px,0)")),s.css(s.image.$item,d),s.options.onScroll&&s.options.onScroll.call(s,{section:c,beforeTop:t,beforeTopEnd:n,afterTop:o,beforeBottom:i,beforeBottomEnd:a,afterBottom:r,visiblePercent:e,fromViewportCenter:m}))}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}])&&a(e.prototype,t),n&&a(e,n),l}(),o=function(e,t){for(var n,o=(e=("object"===("undefined"==typeof HTMLElement?"undefined":c(HTMLElement))?e instanceof HTMLElement:e&&"object"===c(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)?[e]:e).length,i=0,a=arguments.length,r=new Array(2<a?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];for(;i<o;i+=1)if("object"===c(t)||void 0===t?e[i].jarallax||(e[i].jarallax=new v(e[i],t)):e[i].jarallax&&(n=e[i].jarallax[t].apply(e[i].jarallax,r)),void 0!==n)return n;return e};o.constructor=v,t.default=o}]);
;!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Parallax=t()}}(function(){return function t(e,i,n){function o(r,a){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(s)return s(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){var i=e[r][1][t];return o(i||t)},u,u.exports,t,e,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,l=n(t),h=1;h<arguments.length;h++){i=Object(arguments[h]);for(var u in i)s.call(i,u)&&(l[u]=i[u]);if(o){a=o(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,o,s,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(i()-r)/1e6},n=t.hrtime,s=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*t.uptime(),r=s-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function r(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){v&&p&&(v=!1,p.length?f=p.concat(f):y=-1,f.length&&l())}function l(){if(!v){var t=s(a);v=!0;for(var e=f.length;e;){for(p=f,f=[];++y<e;)p&&p[y].run();y=-1,e=f.length}p=null,v=!1,r(t)}}function h(t,e){this.fun=t,this.array=e}function u(){}var c,d,m=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var p,f=[],v=!1,y=-1;m.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];f.push(new h(t,e)),1!==f.length||v||s(l)},h.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=u,m.addListener=u,m.once=u,m.off=u,m.removeListener=u,m.removeAllListeners=u,m.emit=u,m.prependListener=u,m.prependOnceListener=u,m.listeners=function(t){return[]},m.binding=function(t){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},{}],4:[function(t,e,i){(function(i){for(var n=t("performance-now"),o="undefined"==typeof window?i:window,s=["moz","webkit"],r="AnimationFrame",a=o["request"+r],l=o["cancel"+r]||o["cancelRequest"+r],h=0;!a&&h<s.length;h++)a=o[s[h]+"Request"+r],l=o[s[h]+"Cancel"+r]||o[s[h]+"CancelRequest"+r];if(!a||!l){var u=0,c=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-u));u=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout(function(){throw t},0)}},Math.round(i))}return d.push({handle:++c,callback:t,cancelled:!1}),c},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}e.exports=function(t){return a.call(o,t)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(){o.requestAnimationFrame=a,o.cancelAnimationFrame=l}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=t("raf"),r=t("object-assign"),a={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return a.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){a.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),a.css(t,"transform-style","preserve-3d"),a.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,s=null,r=null,l=0,h=a.vendors.length;l<h;l++)if(null!==a.vendors[l]?(s=a.vendors[l][0]+"transform",r=a.vendors[l][1]+"Transform"):(s="transform",r="transform"),void 0!==e.style[r]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var u=document.body||document.createElement("body"),c=document.documentElement,d=c.style.overflow,m=!1;document.body||(m=!0,c.style.overflow="hidden",c.appendChild(u),u.style.overflow="hidden",u.style.background=""),u.appendChild(e),e.style[r]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(e).getPropertyValue(s))&&n.length>0&&"none"!==n,c.style.overflow=d,u.removeChild(e),m&&(u.removeAttribute("style"),u.parentNode.removeChild(u))}}return o},css:function(t,e,i){var n=a.propertyCache[e];if(!n)for(var o=0,s=a.vendors.length;o<s;o++)if(n=null!==a.vendors[o]?a.camelCase(a.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){a.propertyCache[e]=n;break}t.style[n]=i}},l={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},h=function(){function t(e,i){n(this,t),this.element=e;var o={calibrateX:a.data(this.element,"calibrate-x"),calibrateY:a.data(this.element,"calibrate-y"),invertX:a.data(this.element,"invert-x"),invertY:a.data(this.element,"invert-y"),limitX:a.data(this.element,"limit-x"),limitY:a.data(this.element,"limit-y"),scalarX:a.data(this.element,"scalar-x"),scalarY:a.data(this.element,"scalar-y"),frictionX:a.data(this.element,"friction-x"),frictionY:a.data(this.element,"friction-y"),originX:a.data(this.element,"origin-x"),originY:a.data(this.element,"origin-y"),pointerEvents:a.data(this.element,"pointer-events"),precision:a.data(this.element,"precision"),relativeInput:a.data(this.element,"relative-input"),clipRelativeInput:a.data(this.element,"clip-relative-input"),hoverOnly:a.data(this.element,"hover-only"),inputElement:document.querySelector(a.data(this.element,"input-element")),selector:a.data(this.element,"selector")};for(var s in o)null===o[s]&&delete o[s];r(this,l,o,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return o(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=a.transformSupport("2D"),this.transform3DSupport=a.transformSupport("3D")),this.transform3DSupport&&a.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&a.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=a.data(e,"depth")||0;this.depthsX.push(a.data(e,"depth-x")||i),this.depthsY.push(a.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=s(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),s.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?a.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?a.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=a.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=a.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],o=this.depthsX[i],r=this.depthsY[i],l=this.velocityX*(o*(this.invertX?-1:1)),h=this.velocityY*(r*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=s(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=h},{"object-assign":1,raf:4}]},{},[5])(5)});
;"use strict";

//--------------------------------------------------------------------//
// Global helper functions
//--------------------------------------------------------------------//

/**
 * Matches polyfill.
 *
 * @since 1.0.0
 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/**
 * Closest polyfill.
 *
 * @since 1.0.0
 */
if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

/**
 * Foreach polyfill.
 *
 * @since 1.1.0
 */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/**
 * Element.prototype.classList for IE8/9, Safari.
 *
 * @since 1.10
 */
(function () {
  // Helpers.
  var trim = function trim(s) {
      return s.replace(/^\s+|\s+$/g, '');
    },
    regExp = function regExp(name) {
      return new RegExp('(^|\\s+)' + name + '(\\s+|$)');
    },
    forEach = function forEach(list, fn, scope) {
      for (var i = 0; i < list.length; i++) {
        fn.call(scope, list[i]);
      }
    };

  // Class list object with basic methods.
  function ClassList(element) {
    this.element = element;
  }
  ClassList.prototype = {
    add: function add() {
      forEach(arguments, function (name) {
        if (!this.contains(name)) {
          this.element.className = trim(this.element.className + ' ' + name);
        }
      }, this);
    },
    remove: function remove() {
      forEach(arguments, function (name) {
        this.element.className = trim(this.element.className.replace(regExp(name), ' '));
      }, this);
    },
    toggle: function toggle(name) {
      return this.contains(name) ? (this.remove(name), false) : (this.add(name), true);
    },
    contains: function contains(name) {
      return regExp(name).test(this.element.className);
    },
    item: function item(i) {
      return this.element.className.split(/\s+/)[i] || null;
    },
    // bonus
    replace: function replace(oldName, newName) {
      this.remove(oldName), this.add(newName);
    }
  };

  // IE8/9, Safari
  // Remove this if statements to override native classList.
  if (!('classList' in Element.prototype)) {
    // Use this if statement to override native classList that does not have for example replace() method.
    // See browser compatibility: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Browser_compatibility.
    // if (!('classList' in Element.prototype) ||
    //     !('classList' in Element.prototype && Element.prototype.classList.replace)) {
    Object.defineProperty(Element.prototype, 'classList', {
      get: function get() {
        return new ClassList(this);
      }
    });
  }

  // For others replace() support.
  if (window.DOMTokenList && !DOMTokenList.prototype.replace) {
    DOMTokenList.prototype.replace = ClassList.prototype.replace;
  }
})();

/**
 * Index polyfill.
 *
 * @since 1.0.0
 */
var sinatraGetIndex = function sinatraGetIndex(el) {
  var i = 0;
  while (el = el.previousElementSibling) {
    i++;
  }
  return i;
};

/**
 * Slide Up animation.
 *
 * @since 1.0.0
 *
 * @param  {[type]} target   Element to slide.
 * @param  {Number} duration Animation duration.
 */
var sinatraSlideUp = function sinatraSlideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = null;
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

/**
 * Slide Down animation.
 *
 * @since 1.0.0
 *
 * @param  {[type]} target   Element to slide.
 * @param  {Number} duration Animation duration.
 */
var sinatraSlideDown = function sinatraSlideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') {
    display = 'block';
  }
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

/**
 * MoveTo - A lightweight scroll animation javascript library without any dependency.
 * Version 1.8.3 (21-07-2019 00:32)
 * Licensed under MIT
 * Copyright 2019 Hasan Aydoğdu <hsnaydd@gmail.com>
 */
var sinatraScrollTo = function () {
  /**
   * Defaults
   * @type {object}
   */
  var defaults = {
    tolerance: 0,
    duration: 800,
    easing: 'easeOutQuart',
    container: window,
    callback: function callback() {}
  };

  /**
   * easeOutQuart Easing Function
   * @param  {number} t - current time
   * @param  {number} b - start value
   * @param  {number} c - change in value
   * @param  {number} d - duration
   * @return {number} - calculated value
   */

  function easeOutQuart(t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
  }

  /**
   * Merge two object
   *
   * @param  {object} obj1
   * @param  {object} obj2
   * @return {object} merged object
   */
  function mergeObject(obj1, obj2) {
    var obj3 = {};
    Object.keys(obj1).forEach(function (propertyName) {
      obj3[propertyName] = obj1[propertyName];
    });
    Object.keys(obj2).forEach(function (propertyName) {
      obj3[propertyName] = obj2[propertyName];
    });
    return obj3;
  }

  /**
   * Converts camel case to kebab case
   * @param  {string} val the value to be converted
   * @return {string} the converted value
   */
  function kebabCase(val) {
    return val.replace(/([A-Z])/g, function ($1) {
      return '-' + $1.toLowerCase();
    });
  }

  /**
   * Count a number of item scrolled top
   * @param  {Window|HTMLElement} container
   * @return {number}
   */
  function countScrollTop(container) {
    if (container instanceof HTMLElement) {
      return container.scrollTop;
    }
    return container.pageYOffset;
  }

  /**
   * sinatraScrollTo Constructor
   * @param {object} options Options
   * @param {object} easeFunctions Custom ease functions
   */
  function sinatraScrollTo() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var easeFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.options = mergeObject(defaults, options);
    this.easeFunctions = mergeObject({
      easeOutQuart: easeOutQuart
    }, easeFunctions);
  }

  /**
   * Register a dom element as trigger
   * @param  {HTMLElement} dom Dom trigger element
   * @param  {function} callback Callback function
   * @return {function|void} unregister function
   */
  sinatraScrollTo.prototype.registerTrigger = function (dom, callback) {
    var _this = this;
    if (!dom) {
      return;
    }
    var href = dom.getAttribute('href') || dom.getAttribute('data-target'); // The element to be scrolled

    var target = href && href !== '#' ? document.getElementById(href.substring(1)) : document.body;
    var options = mergeObject(this.options, _getOptionsFromTriggerDom(dom, this.options));
    if (typeof callback === 'function') {
      options.callback = callback;
    }
    var listener = function listener(e) {
      e.preventDefault();
      _this.move(target, options);
    };
    dom.addEventListener('click', listener, false);
    return function () {
      return dom.removeEventListener('click', listener, false);
    };
  };

  /**
   * Move
   * Scrolls to given element by using easeOutQuart function
   * @param  {HTMLElement|number} target Target element to be scrolled or target position
   * @param  {object} options Custom options
   */
  sinatraScrollTo.prototype.move = function (target) {
    var _this2 = this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (target !== 0 && !target) {
      return;
    }
    options = mergeObject(this.options, options);
    var distance = typeof target === 'number' ? target : target.getBoundingClientRect().top;
    var from = countScrollTop(options.container);
    var startTime = null;
    var lastYOffset;
    distance -= options.tolerance; // rAF loop

    var loop = function loop(currentTime) {
      var currentYOffset = countScrollTop(_this2.options.container);
      if (!startTime) {
        // To starts time from 1, we subtracted 1 from current time
        // If time starts from 1 The first loop will not do anything,
        // because easing value will be zero
        startTime = currentTime - 1;
      }
      var timeElapsed = currentTime - startTime;
      if (lastYOffset) {
        if (distance > 0 && lastYOffset > currentYOffset || distance < 0 && lastYOffset < currentYOffset) {
          return options.callback(target);
        }
      }
      lastYOffset = currentYOffset;
      var val = _this2.easeFunctions[options.easing](timeElapsed, from, distance, options.duration);
      options.container.scroll(0, val);
      if (timeElapsed < options.duration) {
        window.requestAnimationFrame(loop);
      } else {
        options.container.scroll(0, distance + from);
        options.callback(target);
      }
    };
    window.requestAnimationFrame(loop);
  };

  /**
   * Adds custom ease function
   * @param {string}   name Ease function name
   * @param {function} fn   Ease function
   */
  sinatraScrollTo.prototype.addEaseFunction = function (name, fn) {
    this.easeFunctions[name] = fn;
  };

  /**
   * Returns options which created from trigger dom element
   * @param  {HTMLElement} dom Trigger dom element
   * @param  {object} options The instance's options
   * @return {object} The options which created from trigger dom element
   */
  function _getOptionsFromTriggerDom(dom, options) {
    var domOptions = {};
    Object.keys(options).forEach(function (key) {
      var value = dom.getAttribute('data-mt-'.concat(kebabCase(key)));
      if (value) {
        domOptions[key] = isNaN(value) ? value : parseInt(value, 10);
      }
    });
    return domOptions;
  }
  return sinatraScrollTo;
}();

/**
 * Get all of an element's parent elements up the DOM tree
 *
 * @since 1.0.0
 *
 * @param  {Node}   elem     The element.
 * @param  {String} selector Selector to match against [optional].
 * @return {Array}           The parent elements.
 */
var sinatraGetParents = function sinatraGetParents(elem, selector) {
  // Element.matches() polyfill.
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
  }

  // Setup parents array.
  var parents = [];

  // Get matching parent elements.
  for (; elem && elem !== document; elem = elem.parentNode) {
    // Add matching parents to array.
    if (selector) {
      if (elem.matches(selector)) {
        parents.push(elem);
      }
    } else {
      parents.push(elem);
    }
  }
  return parents;
};

// CustomEvent() constructor functionality in Internet Explorer 9 and higher.
(function () {
  if (typeof window.CustomEvent === 'function') return false;
  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

/**
 * Trigger custom JS Event.
 *
 * @since 1.0.0
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
 * @param {Node} el Dom Node element on which the event is to be triggered.
 * @param {Node} typeArg A DOMString representing the name of the event.
 * @param {String} A CustomEventInit dictionary, having the following fields:
 *			"detail", optional and defaulting to null, of type any, that is an event-dependent value associated with the event.
 */
var sinatraTriggerEvent = function sinatraTriggerEvent(el, typeArg) {
  var customEventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var event = new CustomEvent(typeArg, customEventInit);
  el.dispatchEvent(event);
};

// Main
(function () {
  //--------------------------------------------------------------------//
  // Variable caching
  //--------------------------------------------------------------------//

  var sinatraScrollButton = document.querySelector('#si-scroll-top');
  var pageWrapper = document.getElementById('page');

  //--------------------------------------------------------------------//
  // Local helper functions
  //--------------------------------------------------------------------//

  /**
   * Submenu overflow helper
   *
   * @since 1.0.0
   */
  var sinatraSmartSubmenus = function sinatraSmartSubmenus() {
    if (document.body.classList.contains('sinatra-is-mobile')) {
      return;
    }
    var el, elPosRight, elPosLeft, winRight;
    winRight = window.innerWidth;
    document.querySelectorAll('.sub-menu').forEach(function (item) {
      // Set item to be visible so we can grab offsets
      item.style.visibility = 'visible';

      // Left offset
      var rect = item.getBoundingClientRect();
      elPosLeft = rect.left + window.pageXOffset;

      // Right offset
      elPosRight = elPosLeft + rect.width;

      // Remove styles
      item.removeAttribute('style');

      // Decide where to open
      if (elPosRight > winRight) {
        item.closest('li').classList.add('opens-left');
      } else if (elPosLeft < 0) {
        item.closest('li').classList.add('opens-right');
      }
    });
  };

  /**
   * Debounce functions for better performance
   * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
   *
   * @since 1.0.0
   *
   * @param  {Function} fn The function to debounce
   */
  var sinatraDebounce = function sinatraDebounce(fn) {
    // Setup a timer
    var timeout;

    // Return a function to run debounced
    return function () {
      // Setup the arguments
      var context = this;
      var args = arguments;

      // If there's a timer, cancel it
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      // Setup the new requestAnimationFrame()
      timeout = window.requestAnimationFrame(function () {
        fn.apply(this, args);
      });
    };
  };

  /**
   * Handles Scroll to Top button click
   *
   * @since 1.0.0
   */
  var sinatraScrollTopButton = function sinatraScrollTopButton() {
    if (null === sinatraScrollButton) {
      return;
    }
    if (window.pageYOffset > 450 || document.documentElement.scrollTop > 450) {
      sinatraScrollButton.classList.add('si-visible');
    } else {
      sinatraScrollButton.classList.remove('si-visible');
    }
  };

  /**
   * Handles Sticky Header functionality.
   *
   * @since 1.0.0
   */
  var sinatraStickyHeader = function sinatraStickyHeader() {
    // Check if sticky is enabled.
    if (!sinatra_vars['sticky-header']['enabled']) {
      return;
    }
    var header = document.getElementById('sinatra-header');
    var headerInner = document.getElementById('sinatra-header-inner');
    var wpadminbar = document.getElementById('wpadminbar');

    // Check for header layout 3.
    if (document.body.classList.contains('sinatra-header-layout-3')) {
      header = document.querySelector('#sinatra-header .si-nav-container');
      headerInner = document.querySelector('#sinatra-header .si-nav-container .si-container');
    }

    // Mobile nav active.
    if (window.outerWidth <= sinatra_vars['responsive-breakpoint']) {
      var header = document.getElementById('sinatra-header');
      var headerInner = document.getElementById('sinatra-header-inner');
    }

    // Check if elements exist.
    if (null === header || null === headerInner) {
      return;
    }

    // Calculate the initial sticky position.
    var stickyPosition = header.getBoundingClientRect().top;
    var sticky = stickyPosition - tolerance <= 0;
    var tolerance;
    var stickyPlaceholder;

    // Check if there is a top bar.
    if (null === wpadminbar) {
      tolerance = 0;
    } else if (window.outerWidth <= 600) {
      tolerance = 0;
    } else {
      tolerance = wpadminbar.getBoundingClientRect().height;
    }
    var checkPosition = function checkPosition() {
      if (null === wpadminbar) {
        tolerance = 0;
      } else if (window.outerWidth <= 600) {
        tolerance = 0;
      } else {
        tolerance = wpadminbar.getBoundingClientRect().height;
      }
      stickyPosition = header.getBoundingClientRect().top;
      sticky = stickyPosition - tolerance <= 0;
      maybeStickHeader();
    };
    var maybeStickHeader = function maybeStickHeader() {
      var hideOn = sinatra_vars['sticky-header']['hide_on'];

      // Desktop.
      if (hideOn.includes('desktop') && window.innerWidth >= 992) {
        sticky = false;
      }

      // Tablet.
      if (hideOn.includes('tablet') && window.innerWidth >= 481 && window.innerWidth < 992) {
        sticky = false;
      }

      // Mobile.
      if (hideOn.includes('mobile') && window.innerWidth < 481) {
        sticky = false;
      }
      if (sticky) {
        if (!document.body.classList.contains('si-sticky-header')) {
          stickyPlaceholder = document.createElement('div');
          stickyPlaceholder.setAttribute('id', 'si-sticky-placeholder');
          stickyPlaceholder.style.height = headerInner.getBoundingClientRect().height + 'px';
          header.appendChild(stickyPlaceholder);
          document.body.classList.add('si-sticky-header');

          // Add sticky header offset variable.
          document.body.style.setProperty('--si-sticky-h-offset', header.offsetHeight + 20 + 'px');
        }
      } else {
        if (document.body.classList.contains('si-sticky-header')) {
          document.body.classList.remove('si-sticky-header');
          document.getElementById('si-sticky-placeholder').remove();
        }

        // Remove sticky header offset variable.
        document.body.style.removeProperty('--si-sticky-h-offset');
      }
    };

    // Debounce scroll.
    if ('true' !== header.getAttribute('data-scroll-listener')) {
      window.addEventListener('scroll', function () {
        sinatraDebounce(checkPosition());
      });
      header.setAttribute('data-scroll-listener', 'true');
    }

    // Debounce resize.
    if ('true' !== header.getAttribute('data-resize-listener')) {
      window.addEventListener('resize', function () {
        sinatraDebounce(checkPosition());
      });
      header.setAttribute('data-resize-listener', 'true');
    }

    // Trigger scroll.
    sinatraTriggerEvent(window, 'scroll');
  };

  /**
   * Handles smooth scrolling of elements that have 'si-smooth-scroll' class.
   *
   * @since 1.0.0
   */
  var sinatraSmoothScroll = function sinatraSmoothScroll() {
    var scrollTo = new sinatraScrollTo({
      tolerance: null === document.getElementById('wpadminbar') ? 0 : document.getElementById('wpadminbar').getBoundingClientRect().height
    });
    var scrollTriggers = document.getElementsByClassName('si-smooth-scroll');
    for (var i = 0; i < scrollTriggers.length; i++) {
      scrollTo.registerTrigger(scrollTriggers[i]);
    }
  };

  /**
   * Menu accessibility.
   *
   * @since 1.0.0
   */
  var sinatraMenuAccessibility = function sinatraMenuAccessibility() {
    if (!document.body.classList.contains('si-menu-accessibility')) {
      return;
    }
    document.querySelectorAll('.sinatra-nav').forEach(function (menu) {
      // aria-haspopup
      menu.querySelectorAll('ul').forEach(function (subMenu) {
        subMenu.parentNode.setAttribute('aria-haspopup', 'true');
      });

      // Dropdown visibility on focus
      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('focus', sinatraMenuFocus, true);
        link.addEventListener('blur', sinatraMenuFocus, true);
      });
    });
  };

  /**
   * Helper function that toggles .hovered on focused/blurred menu items.
   *
   * @since 1.0.0
   */
  function sinatraMenuFocus() {
    var self = this;

    // Move up until we find .sinatra-nav
    while (!self.classList.contains('sinatra-nav')) {
      if ('li' === self.tagName.toLowerCase()) {
        if (!self.classList.contains('hovered')) {
          self.classList.add('hovered');
        } else {
          self.classList.remove('hovered');
        }
      }
      self = self.parentElement;
    }
  }

  /**
   * Helps with accessibility for keyboard only users.
   *
   * @since 1.0.0
   */
  var sinatraKeyboardFocus = function sinatraKeyboardFocus() {
    document.body.addEventListener('keydown', function (e) {
      document.body.classList.add('using-keyboard');
    });
    document.body.addEventListener('mousedown', function (e) {
      document.body.classList.remove('using-keyboard');
    });
  };

  /**
   * Calculates screen width without scrollbars.
   *
   * @since 1.1.4
   */
  var sinatraCalcScreenWidth = function sinatraCalcScreenWidth() {
    document.body.style.setProperty('--si-screen-width', document.body.clientWidth + 'px');
  };

  /**
   * Adds visibility delay on navigation submenus.
   *
   * @since 1.0.0
   */
  var sinatraDropdownDelay = function sinatraDropdownDelay() {
    var hoverTimer = null;
    document.querySelectorAll('.sinatra-nav .menu-item-has-children').forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        document.querySelectorAll('.menu-item-has-children').forEach(function (subitem) {
          subitem.classList.remove('hovered');
        });
      });
    });
    document.querySelectorAll('.sinatra-nav .menu-item-has-children').forEach(function (item) {
      item.addEventListener('mouseleave', function () {
        item.classList.add('hovered');
        if (null !== hoverTimer) {
          clearTimeout(hoverTimer);
          hoverTimer = null;
        }
        hoverTimer = setTimeout(function () {
          item.classList.remove('hovered');
          item.querySelectorAll('.menu-item-has-children').forEach(function (childItem) {
            childItem.classList.remove('hovered');
          });
        }, 700);
      });
    });
  };

  /**
   * Adds visibility delay for cart widget dropdown.
   *
   * @since 1.1.0
   */
  var sinatraCartDropdownDelay = function sinatraCartDropdownDelay() {
    var hoverTimer = null;
    document.querySelectorAll('.si-header-widget__cart .si-widget-wrapper').forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        item.classList.remove('dropdown-visible');
      });
    });
    document.querySelectorAll('.si-header-widget__cart .si-widget-wrapper').forEach(function (item) {
      item.addEventListener('mouseleave', function () {
        item.classList.add('dropdown-visible');
        if (null !== hoverTimer) {
          clearTimeout(hoverTimer);
          hoverTimer = null;
        }
        hoverTimer = setTimeout(function () {
          item.classList.remove('dropdown-visible');
        }, 700);
      });
    });
  };

  /**
   * Handles header search widget functionality.
   *
   * @since 1.0.0
   */
  var sinatraHeaderSearch = function sinatraHeaderSearch() {
    var searchButton = document.querySelectorAll('.si-search');
    if (0 === searchButton.length) {
      return;
    }
    searchButton.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        if (item.classList.contains('sinatra-active')) {
          close_search(item);
        } else {
          show_search(item);
        }
      });
    });

    // Show search.
    var show_search = function show_search(item) {
      // Make search visible
      document.body.classList.add('si-search-visible');
      setTimeout(function () {
        // Highlight the search icon
        item.classList.add('sinatra-active');

        // Focus the input
        if (null !== item.nextElementSibling && null !== item.nextElementSibling.querySelector('input')) {
          item.nextElementSibling.querySelector('input').focus();
          item.nextElementSibling.querySelector('input').select();
        }
      }, 100);

      // Attach the ESC listener
      document.addEventListener('keydown', esc_close_search);

      // Attach the outside click listener
      pageWrapper.addEventListener('click', outside_close_search);
    };

    // Close search
    var close_search = function close_search(item) {
      // Animate out
      document.body.classList.remove('si-search-visible');

      // Unhighlight the search icon
      item.classList.remove('sinatra-active');

      // Unhook the ESC listener
      document.removeEventListener('keydown', esc_close_search);

      // Unhook the click listener
      pageWrapper.removeEventListener('click', outside_close_search);
    };

    // Esc support to close search
    var esc_close_search = function esc_close_search(e) {
      if (e.keyCode == 27) {
        document.querySelectorAll('.si-search').forEach(function (item) {
          close_search(item);
        });
      }
    };

    // Close search when clicked anywhere outside the search box
    var outside_close_search = function outside_close_search(e) {
      if (null === e.target.closest('.si-search-container') && null === e.target.closest('.si-search')) {
        document.querySelectorAll('.si-search').forEach(function (item) {
          close_search(item);
        });
      }
    };
  };

  /**
   * Handles mobile menu functionality.
   *
   * @since 1.0.0
   */
  var sinatraMobileMenu = function sinatraMobileMenu() {
    var page = pageWrapper,
      nav = document.querySelector('#sinatra-header-inner .sinatra-nav'),
      current;
    document.querySelectorAll('.si-mobile-nav > button').forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        if (document.body.parentNode.classList.contains('is-mobile-menu-active')) {
          close_menu();
        } else {
          show_menu();
        }
      }, false);
    });

    // Helper functions.
    var show_menu = function show_menu(e) {
      // Add the active class.
      document.body.parentNode.classList.add('is-mobile-menu-active');

      // Hook the ESC listener
      document.addEventListener('keyup', esc_close_menu);

      // Hook the click listener
      if (null !== page) {
        page.addEventListener('click', outside_close_menu);
      }

      // Hook the click listener for submenu toggle.
      document.querySelectorAll('#sinatra-header .sinatra-nav').forEach(function (item) {
        item.addEventListener('click', submenu_toggle);
      });

      // Slide down the menu.
      sinatraSlideDown(nav, 350);
    };
    var close_menu = function close_menu(e) {
      // Remove the active class.
      document.body.parentNode.classList.remove('is-mobile-menu-active');

      // Unhook the ESC listener
      document.removeEventListener('keyup', esc_close_menu);

      // Unhook the click listener
      if (null !== page) {
        page.removeEventListener('click', outside_close_menu);
      }

      // Close submenus
      document.querySelectorAll('#sinatra-header .sinatra-nav > ul > .si-open').forEach(function (item) {
        submenu_display_toggle(item);
      });
      nav.style.display = null;
      nav.querySelectorAll('.hovered').forEach(function (li) {
        li.classList.remove('hovered');
      });
      if (document.body.classList.contains('sinatra-is-mobile')) {
        // Unhook the click listener for submenu toggle
        document.querySelectorAll('#sinatra-header .sinatra-nav').forEach(function (item) {
          item.removeEventListener('click', submenu_toggle);
        });

        // Slide up the menu
        sinatraSlideUp(nav, 250);
      }
    };
    // JavaScript

  const menuLinks = document.querySelectorAll('#sinatra-primary-nav a');

  menuLinks.forEach(link => {
    link.addEventListener('click', close_menu);
  });

    var outside_close_menu = function outside_close_menu(e) {
      if (null === e.target.closest('.si-hamburger') && null === e.target.closest('.site-navigation')) {
        close_menu();
      }
    };
    var esc_close_menu = function esc_close_menu(e) {
      if (e.keyCode == 27) {
        close_menu();
      }
    };
    var submenu_toggle = function submenu_toggle(e) {
      if (e.target.parentElement.querySelectorAll('.sub-menu').length) {
        e.preventDefault();
        submenu_display_toggle(e.target.parentElement);
      }
    };

    // Show or hide the sub menu.
    var submenu_display_toggle = function submenu_display_toggle(current) {
      if (current.classList.contains('si-open')) {
        current.classList.remove('si-open');
        current.querySelectorAll('.sub-menu').forEach(function (submenu) {
          submenu.style.display = null;
        });

        // Close all submenus automatically.
        current.querySelectorAll('li').forEach(function (item) {
          item.classList.remove('si-open');
          item.querySelectorAll('.sub-menu').forEach(function (submenu) {
            submenu.style.display = null;
          });
        });
      } else {
        current.querySelectorAll('.sub-menu').forEach(function (submenu) {
          // Target first level elements only.
          if (current === submenu.parentElement) {
            submenu.style.display = 'block';
          }
        });
        current.classList.add('si-open');
      }
    };

    // Create custom event for closing mobile menu.
    document.addEventListener('sinatra-close-mobile-menu', close_menu);
  };

  /**
   * Sinatra preloader.
   *
   * @since 1.0.0
   */
  var sinatraPreloader = function sinatraPreloader() {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var preloader = document.getElementById('si-preloader');
    if (null === preloader) {
      return;
    }
    var delay = 250;
    var hide_preloader = function hide_preloader() {
      if (document.body.classList.contains('si-loaded')) {
        return;
      }

      // Start fade out animation.
      document.body.classList.add('si-loading');
      setTimeout(function () {
        // Fade out animation completed - set display none
        document.body.classList.replace('si-loading', 'si-loaded');

        // Dispatch event when preloader is done
        sinatraTriggerEvent(document.body, 'si-preloader-done');
      }, delay);
    };

    // Set timeout or hide immediately
    if (timeout > 0) {
      setTimeout(function () {
        hide_preloader();
      }, timeout);
    } else {
      hide_preloader();
    }
    return false;
  };

  /**
   * Handles comments toggle functionality.
   *
   * @since 1.0.0
   */
  var sinatraToggleComments = function sinatraToggleComments() {
    if (!document.body.classList.contains('sinatra-has-comments-toggle')) {
      return;
    }
    if (null == document.getElementById('sinatra-comments-toggle')) {
      return;
    }
    var toggleComments = function toggleComments(e) {
      if ('undefined' !== typeof e) {
        e.preventDefault();
      }
      if (document.body.classList.contains('comments-visible')) {
        document.body.classList.remove('comments-visible');
        document.getElementById('sinatra-comments-toggle').querySelector('span').innerHTML = sinatra_vars.strings.comments_toggle_show;
      } else {
        document.body.classList.add('comments-visible');
        document.getElementById('sinatra-comments-toggle').querySelector('span').innerHTML = sinatra_vars.strings.comments_toggle_hide;
      }
    };
    if (null !== document.getElementById('sinatra-comments-toggle') && (-1 !== location.href.indexOf('#comment') || -1 !== location.href.indexOf('respond'))) {
      toggleComments();
    }
    document.getElementById('sinatra-comments-toggle').addEventListener('click', toggleComments);
  };

  /**
   * Handles toggling and smooth scrolling when clicked on "Comments" link
   *
   * @since 1.0.0
   */
  var sinatraCommentsClick = function sinatraCommentsClick() {
    var commentsLink = document.querySelector('.single .comments-link');
    if (null === commentsLink) {
      return;
    }
    commentsLink.addEventListener('click', function (e) {
      // Show comments if hidden under a toggle
      if (document.body.classList.contains('sinatra-has-comments-toggle') && !document.body.classList.contains('comments-visible')) {
        document.getElementById('sinatra-comments-toggle').click();
      }
    });
  };

  /**
   * Removes inline styles on menus on resize.
   *
   * @since 1.1.0
   */
  var sinatraCheckMobileMenu = function sinatraCheckMobileMenu() {
    // Update body class if mobile breakpoint is reached.
    if (window.innerWidth <= sinatra_vars['responsive-breakpoint']) {
      document.body.classList.add('sinatra-is-mobile');
    } else {
      if (document.body.classList.contains('sinatra-is-mobile')) {
        document.body.classList.remove('sinatra-is-mobile');
        sinatraTriggerEvent(document, 'sinatra-close-mobile-menu');
      }
    }
  };

  //--------------------------------------------------------------------//
  // Events
  //--------------------------------------------------------------------//

  // DOM ready
  document.addEventListener('DOMContentLiteSpeedLoaded', function () {
    sinatraPreloader(5000);
    sinatraMenuAccessibility();
    sinatraKeyboardFocus();
    sinatraScrollTopButton();
    sinatraSmoothScroll();
    sinatraDropdownDelay();
    sinatraToggleComments();
    sinatraHeaderSearch();
    sinatraMobileMenu();
    sinatraCheckMobileMenu();
    sinatraSmartSubmenus();
    sinatraCommentsClick();
    sinatraCartDropdownDelay();
    sinatraStickyHeader();
    sinatraCalcScreenWidth();
  });

  // Window load
  window.addEventListener('load', function () {
    sinatraPreloader();

  });

  // Scroll
  window.addEventListener('scroll', function () {
    sinatraDebounce(sinatraScrollTopButton());
  });

  // Resize
  window.addEventListener('resize', function () {
    sinatraDebounce(sinatraSmartSubmenus());
    sinatraDebounce(sinatraCheckMobileMenu());
    sinatraDebounce(sinatraCalcScreenWidth());
  });

  // Sinatra ready
  sinatraTriggerEvent(document.body, 'si-ready');

  //--------------------------------------------------------------------//
  // Global
  //--------------------------------------------------------------------//

  window.sinatra = window.sinatra || {};

  // Make these function global.
  window.sinatra.preloader = sinatraPreloader;
  window.sinatra.stickyHeader = sinatraStickyHeader;
})();
;!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=101)}({101:function(e,t,n){"use strict";n.r(t);var r=function(e){return"string"!=typeof e||""===e?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var o=function(e){return"string"!=typeof e||""===e?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var i=function(e,t){return function(n,i,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,l=e[t];if(o(n)&&r(i))if("function"==typeof a)if("number"==typeof s){var c={callback:a,priority:s,namespace:i};if(l[n]){var u,d=l[n].handlers;for(u=d.length;u>0&&!(s>=d[u-1].priority);u--);u===d.length?d[u]=c:d.splice(u,0,c),l.__current.forEach((function(e){e.name===n&&e.currentIndex>=u&&e.currentIndex++}))}else l[n]={handlers:[c],runs:0};"hookAdded"!==n&&e.doAction("hookAdded",n,i,a,s)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}};var a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(i,a){var s=e[t];if(o(i)&&(n||r(a))){if(!s[i])return 0;var l=0;if(n)l=s[i].handlers.length,s[i]={runs:s[i].runs,handlers:[]};else for(var c=s[i].handlers,u=function(e){c[e].namespace===a&&(c.splice(e,1),l++,s.__current.forEach((function(t){t.name===i&&t.currentIndex>=e&&t.currentIndex--})))},d=c.length-1;d>=0;d--)u(d);return"hookRemoved"!==i&&e.doAction("hookRemoved",i,a),l}}};var s=function(e,t){return function(n,r){var o=e[t];return void 0!==r?n in o&&o[n].handlers.some((function(e){return e.namespace===r})):n in o}};var l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(r){var o=e[t];o[r]||(o[r]={handlers:[],runs:0}),o[r].runs++;var i=o[r].handlers;for(var a=arguments.length,s=new Array(a>1?a-1:0),l=1;l<a;l++)s[l-1]=arguments[l];if(!i||!i.length)return n?s[0]:void 0;var c={name:r,currentIndex:0};for(o.__current.push(c);c.currentIndex<i.length;){var u=i[c.currentIndex],d=u.callback.apply(null,s);n&&(s[0]=d),c.currentIndex++}return o.__current.pop(),n?s[0]:void 0}};var c=function(e,t){return function(){var n,r,o=e[t];return null!==(n=null===(r=o.__current[o.__current.length-1])||void 0===r?void 0:r.name)&&void 0!==n?n:null}};var u=function(e,t){return function(n){var r=e[t];return void 0===n?void 0!==r.__current[0]:!!r.__current[0]&&n===r.__current[0].name}};var d=function(e,t){return function(n){var r=e[t];if(o(n))return r[n]&&r[n].runs?r[n].runs:0}},f=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=i(this,"actions"),this.addFilter=i(this,"filters"),this.removeAction=a(this,"actions"),this.removeFilter=a(this,"filters"),this.hasAction=s(this,"actions"),this.hasFilter=s(this,"filters"),this.removeAllActions=a(this,"actions",!0),this.removeAllFilters=a(this,"filters",!0),this.doAction=l(this,"actions"),this.applyFilters=l(this,"filters",!0),this.currentAction=c(this,"actions"),this.currentFilter=c(this,"filters"),this.doingAction=u(this,"actions"),this.doingFilter=u(this,"filters"),this.didAction=d(this,"actions"),this.didFilter=d(this,"filters")};var h=function(){return new f},p=h();p.addAction,p.addFilter,p.removeAction,p.removeFilter,p.hasAction,p.hasFilter,p.removeAllActions,p.removeAllFilters,p.doAction,p.applyFilters,p.currentAction,p.currentFilter,p.doingAction,p.doingFilter,p.didAction,p.didFilter,p.actions,p.filters;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=v(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==v(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}window.isEditMode=!1,window.eael=window.ea={hooks:h(),isEditMode:!1,elementStatusCheck:function(e){return!(!window.eaElementList||!(e in window.eaElementList))||(window.eaElementList=y(y({},window.eaElementList),{},g({},e,!0)),!1)},debounce:function(e,t){var n;return function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(r,o)}),t)}}},eael.hooks.addAction("widgets.reinit","ea",(function(e){var t=jQuery(".eael-filter-gallery-container",e),n=jQuery(".eael-post-grid:not(.eael-post-carousel)",e),r=jQuery(".eael-twitter-feed-masonry",e),o=jQuery(".eael-instafeed",e),i=jQuery(".premium-gallery-container",e),a=jQuery(".eael-event-calendar-cls",e),s=jQuery(".eael-testimonial-slider",e),l=jQuery(".eael-tm-carousel",e),c=jQuery(".eael-post-carousel:not(.eael-post-grid)",e),u=jQuery(".eael-logo-carousel",e),d=jQuery(".eael-twitter-feed-carousel",e);t.length&&t.isotope("layout"),n.length&&n.isotope("layout"),r.length&&r.isotope("layout"),o.length&&o.isotope("layout"),i.length&&i.isotope("layout"),a.length&&eael.hooks.doAction("eventCalendar.reinit"),s.length&&eael.hooks.doAction("testimonialSlider.reinit"),l.length&&eael.hooks.doAction("teamMemberCarousel.reinit"),c.length&&eael.hooks.doAction("postCarousel.reinit"),u.length&&eael.hooks.doAction("logoCarousel.reinit"),d.length&&eael.hooks.doAction("twitterCarousel.reinit")}));var b,w=function(e){window.dispatchEvent(new Event("resize")),(e="object"===v(e)?e:jQuery(e)).find(".swiper-wrapper").each((function(){var e=jQuery(this).css("transform");jQuery(this).css("transform",e)}))};eael.hooks.addAction("ea-advanced-tabs-triggered","ea",w),eael.hooks.addAction("ea-advanced-accordion-triggered","ea",w),jQuery(window).on("elementor/frontend/init",(function(){window.isEditMode=elementorFrontend.isEditMode(),window.eael.isEditMode=elementorFrontend.isEditMode(),eael.hooks.doAction("init"),eael.isEditMode&&eael.hooks.doAction("editMode.init")})),function(e){eael.getToken=function(){localize.nonce&&!eael.noncegenerated&&e.ajax({url:localize.ajaxurl,type:"post",data:{action:"eael_get_token"},success:function(e){e.success&&(localize.nonce=e.data.nonce,eael.noncegenerated=!0)}})},eael.sanitizeURL=function(e){if(e.startsWith("/")||e.startsWith("#"))return e;try{var t=new URL(e);if(!["http:","https:","ftp:","ftps:","mailto:","news:","irc:","irc6:","ircs:","gopher:","nntp:","feed:","telnet:","mms:","rtsp:","sms:","svn:","tel:","fax:","xmpp:","webcal:","urn:"].includes(t.protocol))throw new Error("Invalid protocol");return t.toString()}catch(e){return console.error("Error sanitizing URL:",e.message),"#"}};var t=!0;window.addEventListener("hashchange",(function(){if(t){var e=window.location.hash.substr(1);"undefined"!==(e="safari"===e?"eael-safari":e)&&e&&jQuery("#"+e).trigger("click")}})),e("a").on("click",(function(n){var r,o=e(this).attr("href");(r=(o=void 0===o?"":o).startsWith("#"))||(r=(o=o.replace(localize.page_permalink,"")).startsWith("#")),r&&(t=!1,setTimeout((function(){t=!0}),100));try{if(o.startsWith("#!")){var i=o.replace("#!","#");e(i).trigger("click")}else if(r&&(e(o).hasClass("eael-tab-item-trigger")||e(o).hasClass("eael-accordion-header"))&&(e(o).trigger("click"),void 0!==o&&o)){var a=e(o).closest(".eael-advance-tabs");if(a.length>0){var s=a.data("custom-id-offset");s=s?parseFloat(s):0,e("html, body").animate({scrollTop:e(o).offset().top-s},300)}}}catch(e){}})),e(document).on("click",".e-n-tab-title",(function(){setTimeout((function(){window.dispatchEvent(new Event("resize"))}),100)}))}(jQuery),(b=jQuery)(document).on("click",".theme-savoy .eael-product-popup .nm-qty-minus, .theme-savoy .eael-product-popup .nm-qty-plus",(function(e){var t=b(this),n=t.closest(".quantity").find(".qty"),r=parseFloat(n.val()),o=parseFloat(n.attr("max")),i=parseFloat(n.attr("min")),a=n.attr("step");r&&""!==r&&"NaN"!==r||(r=0),""!==o&&"NaN"!==o||(o=""),""!==i&&"NaN"!==i||(i=0),"any"!==a&&""!==a&&void 0!==a&&"NaN"!==parseFloat(a)||(a=1),t.hasClass("nm-qty-plus")?o&&(o==r||r>o)?n.val(o):n.val(r+parseFloat(a)):i&&(i==r||r<i)?n.val(i):r>0&&n.val(r-parseFloat(a))})),function(e){e.fn.isInViewport=function(){if(e(this).length<1)return!1;var t=e(this).offset().top,n=t+e(this).outerHeight()/2,r=e(window).scrollTop(),o=r+e(window).height()/2;return n>r&&t<o},e(document).ready((function(){var e=new URLSearchParams(location.search);if(e.has("popup-selector")&&(e.has("eael-lostpassword")||e.has("eael-resetpassword"))){var t=e.get("popup-selector");t.length&&(t=t.replace(/_/g," "),setTimeout((function(){jQuery(t).trigger("click")}),300))}}))}(jQuery)}});
;