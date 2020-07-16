// #### 全屏切换效果
// > 通过鼠标的滚轮 切换全屏页面
// 
// - 使用fullpage来完成
$(function($)
	{ 
			//初始化
		$('#dowebok').fullpage({
			//设置颜色
			sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
			//取消默认垂直居中
			verticalCentered:false,
			//导航
			navigation: true,
			//屏幕滚动到下一个时的回调函数
			afterLoad: function(link,index){
				console.log(index)
				$('.section').eq(index-1).addClass('now')
			},
			//初始化完毕后触发
			afterRender:function(){
				$('.more').on('click',function(){
					$.fn.fullpage.moveSectionDown();
				})
				 /*当第四屏的购物车动画结束之后执行收货地址的动画*/
				 $('#cart').on('transitionend',function(){
					 console.log("以结束")
				 })
			},
			//滚动前的回调函数
			onLeave:function(index,nextIndex,direction){
				///离开第二屏进入第六屏的时候给第三屏div添加css 名
				if(index == 2 && nextIndex == 3){
					$('.section').eq(index-1).addClass('leaved')
				}
				if(index == 3 && nextIndex == 4){
					$('.section').eq(index-1).addClass('leaved')
				}
				
				if(index == 5 && nextIndex == 6){
					$('.section').eq(index-1).addClass('leaved')
					$('.section06 .box06').addClass('show')
				}
				if(index == 6 && nextIndex == 7){
					$('.section07 .xx07 img').each(function (i,index) {
						$(this).delay(i*0.5*1000).fadeIn()
					})
					$('.section07 .text07').addClass('show')
					
				}
			},
			//页面滚动时间（毫秒）
			scrollingSpeed:1000
			
		});
			
			$('.section08').on('mousemove',function (e) {
				// console.log(e.pageX)
				$('.section08 .hand').css({
					top:e.pageY -50,
					left:e.pageX -300
				})
				$('.section08 .again').on('click',function () {
					// console.log(456) now leaved show
					$('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show')
					$('.sectionChild [style]').removeAttr('style')
					// 去第一页
					$.fn.fullpage.moveTo(1)
					
				})	
				
			})
			
			
			
			
		}) //入口函数


function isPc() {
		    var userAgentInfo = navigator.userAgent;
		    var Agents = ["Android", "iPhone",
		                "SymbianOS", "Windows Phone",
		                "iPad", "iPod"];
		    var flag = true;
		    for (var v = 0; v < Agents.length; v++) {
		        if (userAgentInfo.indexOf(Agents[v]) > 0) {
		            flag = false;
		            break;
		        }
		    }
		    return flag;
		}

if (!isPc()) {
	alert('建议您电脑访问该页面');
}
