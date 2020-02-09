function main()
{
	p = new Suica();			
	
	lookAt([93.6, 18, 40],[0,0,0],[0,0,1]);
	
	/*
	Event LIsteners:
	p.gl.canvas.addEventListener('mousedown',mouseDown,false);
	p.gl.canvas.addEventListener('mouseup',mouseUp,false);
	p.gl.canvas.addEventListener('mousemove',mouseMove,false);
	*/
	
	//Създаване на бойното поле
	square([0,0,-0.1], 100).custom({color: [0,1.6,0.2]});
	
	//Дойранско езеро
	doiranskoEzero = group([
		circle([0,42,0], 15),circle([-10,40,0], 15),circle([-20,40,0], 15),
		circle([-32,40,0], 15),circle([10,43,0], 15),circle([20,47,0], 15),
		circle([30,47,0], 15)
	]);
	
	doiranskoEzero.mergeColor();
	doiranskoEzero.color = [1.2,1.3,2.2];
	
	//Червената окръжност е Дойран
	doiran = circle([21,30,0], 2).custom({color: [1,0,0]});	
			
	//Предна защитна линия
	prednaZashtitnaLiniq = group([
		rectangle([30,31,0],[1,2]).custom({color: [0,0,0], mode: Suica.LINE}),
		rectangle([30,31,0],[1,2]).custom({color: [1.4,1.5,1.5]}),
		circle([30,29.5,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([30,29.5,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([29,28.4,0],[1,2]).custom({color: [0,0,0], mode: Suica.LINE, spin: Math.PI/4}),
		rectangle([29,28.4,0],[1,2]).custom({color: [1.4,1.5,1.5], spin: Math.PI/4}),
		rectangle([31,28.4,0],[1,2]).custom({color: [0,0,0], mode: Suica.LINE, spin: -Math.PI/4}),
		rectangle([31,28.4,0],[1,2]).custom({color: [1.4,1.5,1.5], spin: -Math.PI/4}),
		circle([28,27.4,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([28,27.4,0],0.5).custom({color: [1.4,1.5,1.5]}),
		circle([32,27.4,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([32,27.4,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([29,26.4,0],[1,2]).custom({color: [0,0,0], mode: Suica.LINE, spin: -Math.PI/4}),
		rectangle([29,26.4,0],[1,2]).custom({color: [1.4,1.5,1.5], spin: -Math.PI/4}),
		rectangle([31,26.4,0],[1,2]).custom({color: [0,0,0], mode: Suica.LINE, spin: Math.PI/4}),
		rectangle([31,26.4,0],[1,2]).custom({color: [1.4,1.5,1.5], spin: Math.PI/4}),
		circle([29.9,25.4,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([29.9,25.4,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([31,24.5,0],[1,2]).custom({color: [0,0,0], mode: Suica.LINE, spin: -Math.PI/4}),
		rectangle([31,24.5,0],[1,2]).custom({color: [1.4,1.5,1.5], spin: -Math.PI/4}),
		rectangle([31,22.4,0],[1,1.5]).custom({color: [0,0,0], mode: Suica.LINE, spin: Math.PI/4}),
		rectangle([31,22.4,0],[1,1.5]).custom({color: [1.4,1.5,1.5], spin: Math.PI/4}),
		circle([32,23.3,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([32,23.3,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([28.7,20.2,0],[1,2.5]).custom({color: [0,0,0], mode: Suica.LINE, spin: Math.PI/4}),
		rectangle([28.7,20.2,0],[1,2.5]).custom({color: [1.4,1.5,1.5], spin: Math.PI/4}),
		circle([30,21.5,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([30,21.5,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([28.2,18.2,0],[1,1]).custom({color: [0,0,0], mode: Suica.LINE, spin: -Math.PI/4}),
		rectangle([28.2,18.2,0],[1,1]).custom({color: [1.4,1.5,1.5], spin: -Math.PI/4}),
		circle([27.5,18.9,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([27.5,18.9,0],0.5).custom({color: [1.4,1.5,1.5]}),
		circle([28.9,17.4,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([28.9,17.4,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([27.4,15.9,0],[1,3]).custom({color: [0,0,0], mode: Suica.LINE, spin: Math.PI/4}),
		rectangle([27.4,15.9,0],[1,3]).custom({color: [1.4,1.5,1.5], spin: Math.PI/4}),
		circle([26,14.5,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([26,14.5,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([26,13,0],[1,2]).custom({color: [0,0,0], mode: Suica.LINE}),
		rectangle([26,13,0],[1,2]).custom({color: [1.4,1.5,1.5],}),
		circle([26,11.5,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([26,11.5,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([23.9,10.3,0],[1,4]).custom({color: [0,0,0], mode: Suica.LINE, spin: Math.PI/3}),
		rectangle([23.9,10.3,0],[1,4]).custom({color: [1.4,1.5,1.5], spin: Math.PI/3}),
		circle([21.6,9,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([21.6,9,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([19.7,7.5,0],[1,4]).custom({color: [0,0,0], mode: Suica.LINE, spin: Math.PI/3.5}),
		rectangle([19.7,7.5,0],[1,4]).custom({color: [1.4,1.5,1.5], spin: Math.PI/3.5}),
		circle([17.8,6,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([17.8,6,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([17.7,4.5,0],[1,2]).custom({color: [0,0,0], mode: Suica.LINE}),
		rectangle([17.7,4.5,0],[1,2]).custom({color: [1.4,1.5,1.5]}),
		circle([17.7,3,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([17.7,3,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([15.5,1.7,0],[1,4]).custom({color: [0,0,0], mode: Suica.LINE,spin: Math.PI/3}),
		rectangle([15.5,1.7,0],[1,4]).custom({color: [1.4,1.5,1.5], spin: Math.PI/3}),
		circle([13.4,0.5,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([13.4,0.5,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([10.6,-0.8,0],[1,5]).custom({color: [0,0,0], mode: Suica.LINE,spin: Math.PI/2.8}),
		rectangle([10.6,-0.8,0],[1,5]).custom({color: [1.4,1.5,1.5],spin: Math.PI/2.8}),
		circle([7.9,-2.1,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([7.9,-2.1,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([4.4,-1.2,0],[1,6]).custom({color: [0,0,0], mode: Suica.LINE,spin: -Math.PI/2.4}),
		rectangle([4.4,-1.2,0],[1,6]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/2.4}),
		rectangle([2,-5.2,0],[1,3]).custom({color: [0,0,0], mode: Suica.LINE,spin: Math.PI/4}),
		rectangle([2,-5.2,0],[1,3]).custom({color: [1.4,1.5,1.5],spin: Math.PI/4}),
		rectangle([1.5,-10.2,0],[1,3]).custom({color: [0,0,0], mode: Suica.LINE, spin: Math.PI/6}),
		rectangle([1.5,-10.2,0],[1,3]).custom({color: [1.4,1.5,1.5], spin: Math.PI/6}),
		rectangle([2.5,-15.2,0],[1,3]).custom({color: [0,0,0], mode: Suica.LINE, spin: -Math.PI/6}),
		rectangle([2.5,-15.2,0],[1,3]).custom({color: [1.4,1.5,1.5], spin: -Math.PI/6}),
		circle([3.4,-16.8,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([3.4,-16.8,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([2.2,-18.4,0],[1,3]).custom({color: [0,0,0], mode: Suica.LINE, spin: Math.PI/5}),
		rectangle([2.2,-18.4,0],[1,3]).custom({color: [1.4,1.5,1.5], spin: Math.PI/5}),
		rectangle([-2,-28.4,0],[1,5]).custom({color: [0,0,0], mode: Suica.LINE, spin: Math.PI/6}),
		rectangle([-2,-28.4,0],[1,5]).custom({color: [1.4,1.5,1.5], spin: Math.PI/6}),
		rectangle([-5,-33.4,0],[1,2]).custom({color: [0,0,0], mode: Suica.LINE, spin: -Math.PI/6.5}),
		rectangle([-5,-33.4,0],[1,2]).custom({color: [1.4,1.5,1.5], spin: -Math.PI/6.5}),
		rectangle([-7,-37.4,0],[1,3]).custom({color: [0,0,0], mode: Suica.LINE, spin: Math.PI/5}),
		rectangle([-7,-37.4,0],[1,3]).custom({color: [1.4,1.5,1.5], spin: Math.PI/5}),
		rectangle([-6,-43.4,0],[1,4]).custom({color: [0,0,0], mode: Suica.LINE}),
		rectangle([-6,-43.4,0],[1,4]).custom({color: [1.4,1.5,1.5]}),
		circle([1,-0.3,0],0.5).custom({color: [0,0,0], mode: Suica.LINE}),
		circle([1,-0.3,0],0.5).custom({color: [1.4,1.5,1.5]})							
	]);

	//Междинна защитна линия
	mejdinnaZashtitnaLiniq = group([
		rectangle([-22,22.5,0],[1,6]).custom({color: [1,0,0], mode: Suica.LINE,spin: Math.PI/6}),
		rectangle([-22,22.5,0],[1,6]).custom({color: [1.4,1.5,1.5], spin: Math.PI/6}),			
		circle([-23.7,19.4,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-23.7,19.4,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-22.5,17.3,0],[1,4]).custom({color: [1,0,0], mode: Suica.LINE,spin: -Math.PI/6}),
		rectangle([-22.5,17.3,0],[1,4]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/6}),				
		circle([-21.2,15.2,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-21.2,15.2,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-21.2,12.7,0],[1,4]).custom({color: [1,0,0], mode: Suica.LINE}),
		rectangle([-21.2,12.7,0],[1,4]).custom({color: [1.4,1.5,1.5]}),				
		circle([-21.2,10.2,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-21.2,10.2,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-19.5,9.3,0],[1,3]).custom({color: [1,0,0], mode: Suica.LINE,spin: -Math.PI/3}),
		rectangle([-19.5,9.3,0],[1,3]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/3}),				
		circle([-17.7,8.3,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-17.7,8.3,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-16.9,7,0],[1,2]).custom({color: [1,0,0], mode: Suica.LINE,spin: -Math.PI/6}),
		rectangle([-16.9,7,0],[1,2]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/6}),				
		circle([-16.1,5.6,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-16.1,5.6,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-13.8,4.3,0],[1,4]).custom({color: [1,0,0], mode: Suica.LINE,spin: -Math.PI/3}),
		rectangle([-13.8,4.3,0],[1,4]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/3}),				
		circle([-11.5,3,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-11.5,3,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-10.3,2,0],[1,2]).custom({color: [1,0,0], mode: Suica.LINE,spin: -Math.PI/4}),
		rectangle([-10.3,2,0],[1,2]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/4}),				
		circle([-9.2,0.9,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-9.2,0.9,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-6.3,1.2,0],[1,5]).custom({color: [1,0,0], mode: Suica.LINE,spin: Math.PI/2.2}),
		rectangle([-6.3,1.2,0],[1,5]).custom({color: [1.4,1.5,1.5],spin: Math.PI/2.2}),				
		circle([-3.2,1.6,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-3.2,1.6,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-1.1,0.6,0],[1,3.5]).custom({color: [1,0,0], mode: Suica.LINE,spin: -Math.PI/2.9}),
		rectangle([-1.1,0.6,0],[1,3.5]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/2.9}),				
		rectangle([-2,-1.5,0],[1,3.5]).custom({color: [1,0,0], mode: Suica.LINE,spin: Math.PI/2.9}),
		rectangle([-2,-1.5,0],[1,3.5]).custom({color: [1.4,1.5,1.5],spin: Math.PI/2.9}),				
		circle([-3.9,-2.5,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-3.9,-2.5,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-6.1,-4.7,0],[1,5]).custom({color: [1,0,0], mode: Suica.LINE,spin: Math.PI/4}),
		rectangle([-6.1,-4.7,0],[1,5]).custom({color: [1.4,1.5,1.5],spin: Math.PI/4}),				
		circle([-8,-6.8,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-8,-6.8,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-6.7,-8.1,0],[1,3]).custom({color: [1,0,0], mode: Suica.LINE,spin: -Math.PI/4}),
		rectangle([-6.7,-8.1,0],[1,3]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/4}),				
		circle([-5.4,-9.5,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-5.4,-9.5,0],0.5).custom({color: [1.4,1.5,1.5]}),			
		rectangle([-6.6,-11.7,0],[1,4]).custom({color: [1,0,0], mode: Suica.LINE,spin: Math.PI/6}),
		rectangle([-6.6,-11.7,0],[1,4]).custom({color: [1.4,1.5,1.5],spin: Math.PI/6}),				
		circle([-7.9,-13.9,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-7.9,-13.9,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-7.1,-15,0],[1,2]).custom({color: [1,0,0], mode: Suica.LINE,spin: -Math.PI/4}),
		rectangle([-7.1,-15,0],[1,2]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/4}),				
		circle([-6.1,-16.1,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-6.1,-16.1,0],0.5).custom({color: [1.4,1.5,1.5]}),			
		rectangle([-6.1,-18,0],[1,3]).custom({color: [1,0,0], mode: Suica.LINE}),
		rectangle([-6.1,-18,0],[1,3]).custom({color: [1.4,1.5,1.5]}),				
		circle([-6.1,-20,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-6.1,-20,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-8.1,-22,0],[1,5]).custom({color: [1,0,0], mode: Suica.LINE,spin: Math.PI/4}),
		rectangle([-8.1,-22,0],[1,5]).custom({color: [1.4,1.5,1.5],spin: Math.PI/4}),				
		circle([-10.1,-24,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-10.1,-24,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-9.2,-25.8,0],[1,3]).custom({color: [1,0,0], mode: Suica.LINE,spin: -Math.PI/6}),
		rectangle([-9.2,-25.8,0],[1,3]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/6}),				
		circle([-8.4,-27.6,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-8.4,-27.6,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-10.1,-29.8,0],[1,5]).custom({color: [1,0,0], mode: Suica.LINE,spin: Math.PI/5}),
		rectangle([-10.1,-29.8,0],[1,5]).custom({color: [1.4,1.5,1.5],spin: Math.PI/5}),				
		circle([-11.7,-32.2,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-11.7,-32.2,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-12.6,-33.5,0],[1,2]).custom({color: [1,0,0], mode: Suica.LINE,spin: Math.PI/5}),
		rectangle([-12.6,-33.5,0],[1,2]).custom({color: [1.4,1.5,1.5],spin: Math.PI/5}),				
		circle([-13.4,-34.6,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-13.4,-34.6,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-14.6,-36.7,0],[1,4]).custom({color: [1,0,0], mode: Suica.LINE,spin: Math.PI/6}),
		rectangle([-14.6,-36.7,0],[1,4]).custom({color: [1.4,1.5,1.5],spin: Math.PI/6}),				
		circle([-15.9,-39,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-15.9,-39,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-16.1,-40.9,0],[1,3]).custom({color: [1,0,0], mode: Suica.LINE}),
		rectangle([-16.1,-40.9,0],[1,3]).custom({color: [1.4,1.5,1.5]}),			
		circle([-16.1,-42.9,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-16.1,-42.9,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-14.5,-45.4,0],[1,5]).custom({color: [1,0,0], mode: Suica.LINE,spin: -Math.PI/5}),
		rectangle([-14.5,-45.4,0],[1,5]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/5}),				
		circle([-12.7,-47.9,0],0.5).custom({color: [1,0,0], mode: Suica.LINE}),
		circle([-12.7,-47.9,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-12.5,-49.3,0],[1,2]).custom({color: [1,0,0], mode: Suica.LINE}),
		rectangle([-12.5,-49.3,0],[1,2]).custom({color: [1.4,1.5,1.5]})
	]);
	
	//Главна защитна линия
	glavnaZashtitnaLiniq = group([
		rectangle([-25.5,22.5,0],[1,6]).custom({color: [1,1,1], mode: Suica.LINE,spin: Math.PI/6}),
		rectangle([-25.5,22.5,0],[1,6]).custom({color: [1.4,1.5,1.5],spin: Math.PI/6}),				
		circle([-27.1,19.5,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-27.1,19.5,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-26,17.5,0],[1,4]).custom({color: [1,1,1], mode: Suica.LINE,spin: -Math.PI/6}),
		rectangle([-26,17.5,0],[1,4]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/6}),				
		circle([-24.8,15.4,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-24.8,15.4,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-24.8,12.9,0],[1,4]).custom({color: [1,1,1], mode: Suica.LINE}),
		rectangle([-24.8,12.9,0],[1,4]).custom({color: [1.4,1.5,1.5]}),				
		circle([-24.8,10.4,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-24.8,10.4,0],0.5).custom({color: [1.4,1.5,1.5]}),								
		rectangle([-23.5,9.3,0],[1,3]).custom({color: [1,1,1], mode: Suica.LINE,spin: -Math.PI/3}),
		rectangle([-23.5,9.3,0],[1,3]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/3}),				
		circle([-22,8.5,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-22,8.5,0],0.5).custom({color: [1.4,1.5,1.5]}),
		rectangle([-21.2,7.4,0],[1,2]).custom({color: [1,1,1], mode: Suica.LINE,spin: -Math.PI/6}),
		rectangle([-21.2,7.4,0],[1,2]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/6}),				
		circle([-20.6,6.1,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-20.6,6.1,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-18.6,4.8,0],[1,4]).custom({color: [1,1,1], mode: Suica.LINE,spin: -Math.PI/3}),
		rectangle([-18.6,4.8,0],[1,4]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/3}),				
		circle([-16.5,3.5,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-16.5,3.5,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-15.5,2.4,0],[1,2]).custom({color: [1,1,1], mode: Suica.LINE,spin: -Math.PI/4}),
		rectangle([-15.5,2.4,0],[1,2]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/4}),				
		rectangle([-16,-2,0],[1,2]).custom({color: [1,1,1], mode: Suica.LINE,spin: -Math.PI/4}),
		rectangle([-16,-2,0],[1,2]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/4}),				
		rectangle([-13.7,0.4,0],[1,2]).custom({color: [1,1,1], mode: Suica.LINE,spin: -Math.PI/5}),
		rectangle([-13.7,0.4,0],[1,2]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/5}),
		rectangle([-25,6,0],[1,3]).custom({color: [1,1,1],mode: Suica.LINE, spin: -Math.PI/5}),
		rectangle([-25,6,0],[1,3]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/5}),
		circle([-14.5,1.4,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-14.5,1.4,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		circle([-12.9,-0.7,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-12.9,-0.7,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-10.3,-0.9,0],[1,5]).custom({color: [1,1,1], mode: Suica.LINE,spin: Math.PI/2}),
		rectangle([-10.3,-0.9,0],[1,5]).custom({color: [1.4,1.5,1.5],spin: Math.PI/2}),						
		rectangle([-9,-4,0],[1,4]).custom({color: [1,1,1], mode: Suica.LINE,spin: Math.PI/4}),
		rectangle([-9,-4,0],[1,4]).custom({color: [1.4,1.5,1.5],spin: Math.PI/4}),
		circle([-10.7,-5.7,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-10.7,-5.7,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-11,-10,0],[1,4]).custom({color: [1,1,1], mode: Suica.LINE,spin: -Math.PI/4}),	
		rectangle([-11,-10,0],[1,4]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/4}),						
		rectangle([-11,-13,0],[1,2]).custom({color: [1,1,1], mode: Suica.LINE,spin: Math.PI/6}),		
		rectangle([-11,-13,0],[1,2]).custom({color: [1.4,1.5,1.5],spin: Math.PI/6}),	
		rectangle([-11,-17,0],[1,3.5]).custom({color: [1,1,1], mode: Suica.LINE,spin: -Math.PI/4}),				
		rectangle([-11,-17,0],[1,3.5]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/4}),									
		rectangle([-11,-20,0],[1,3]).custom({color: [1,1,1], mode: Suica.LINE,spin: Math.PI/4}),	
		rectangle([-11,-20,0],[1,3]).custom({color: [1.4,1.5,1.5],spin: Math.PI/4}),				
		circle([-9.5,-18.5,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-9.5,-18.5,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-13,-25,0],[1,3.5]).custom({color: [1,1,1], mode: Suica.LINE,spin: -Math.PI/6}),
		rectangle([-13,-25,0],[1,3.5]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/6}),				
		rectangle([-13.2,-28.2,0],[1,3]).custom({color: [1,1,1], mode: Suica.LINE,spin: Math.PI/4}),
		rectangle([-13.2,-28.2,0],[1,3]).custom({color: [1.4,1.5,1.5],spin: Math.PI/4}),				
		circle([-11.8,-26.8,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-11.8,-26.8,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		circle([-14.5,-29.6,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-14.5,-29.6,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-15.8,-31.8,0],[1,4]).custom({color: [1,1,1], mode: Suica.LINE,spin: Math.PI/6}),
		rectangle([-15.8,-31.8,0],[1,4]).custom({color: [1.4,1.5,1.5],spin: Math.PI/6}),				
		circle([-17,-33.8,0],0.5).custom({color: [1,1,1], mode: Suica.LINE}),
		circle([-17,-33.8,0],0.5).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-18.2,-36,0],[1,4]).custom({color: [1,1,1], mode: Suica.LINE,spin: Math.PI/6}),
		rectangle([-18.2,-36,0],[1,4]).custom({color: [1.4,1.5,1.5],spin: Math.PI/6}),				
		rectangle([-19.2,-40.2,0],[1,3]).custom({color: [1,1,1], mode: Suica.LINE}),
		rectangle([-19.2,-40.2,0],[1,3]).custom({color: [1.4,1.5,1.5]}),				
		rectangle([-19.2,-45.2,0],[1,4]).custom({color: [1,1,1], mode: Suica.LINE,spin: -Math.PI/6}),
		rectangle([-19.2,-45.2,0],[1,4]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/6}),				
		rectangle([-16.9,-48.1,0],[1,2]).custom({color: [1,1,1], mode: Suica.LINE,spin: -Math.PI/4}),
		rectangle([-16.9,-48.1,0],[1,2]).custom({color: [1.4,1.5,1.5],spin: -Math.PI/4})				
	]);
	
	x = 0;
	y = 0;
	z = 0;
	
	bulgaria = group([
		rectangle([x,y,z+3.9],[2,3]).custom({color: [1,1,1]}).custom({focus: [1,0,0]}),
		rectangle([x,y,z+2],[2,3]).custom({color: [0,1,0]}).custom({focus: [1,0,0]}),
		rectangle([x,y,z+0.5],[1,3]).custom({color: [1,0,0]}).custom({focus: [1,0,0]}),
		ellipse([x,y,z],[1,1.5]).custom({color: [1,0,0]}).custom({focus: [1,0,0]})
	]);
	
	serbia = group([
		rectangle([x,y,z+3.9],[2,3]).custom({color: [1,0,0]}).custom({focus: [1,0,0]}),
		rectangle([x,y,z+2],[2,3]).custom({color: [0,0,1]}).custom({focus: [1,0,0]}),
		rectangle([x,y,z+0.5],[1,3]).custom({color: [1,1,1]}).custom({focus: [1,0,0]}),
		ellipse([x,y,z],[1,1.5]).custom({color: [1,1,1]}).custom({focus: [1,0,0]})
	]);
	
	france = group([
		rectangle([x,y,z],[5,1.1]).custom({color: [1,0,0]}).custom({focus: [1,0,0]}),
		rectangle([x,y+1.1,z],[5,1.1]).custom({color: [0,0,1]}).custom({focus: [1,0,0]}),
		rectangle([x,y+2.2,z],[5,1.1]).custom({color: [1,1,1]}).custom({focus: [1,0,0]}),
		ellipse([x,y,z+2.5],[0.5,0.8]).custom({color: [1,0,0]}).custom({focus: [1,0,0], spin: Math.PI/2}),
		ellipse([x,y+1.1,z+2.5],[0.5,0.8]).custom({color: [0,0,1]}).custom({focus: [1,0,0], spin: Math.PI/2}),
		ellipse([x,y+2.2,z+2.5],[0.5,0.8]).custom({color: [1,1,1]}).custom({focus: [1,0,0], spin: Math.PI/2})
	]);
	
	england = group([
		rectangle([x,y,z],[5,3]).custom({color: [0,0,1]}).custom({focus: [1,0,0]}),
		rectangle([x+0.001,y,z], [0.53,5.6]).custom({color: [1,1,1]}).custom({focus: [1,0,0], spin: Math.PI/3}),
		rectangle([x+0.001,y,z], [0.53,5.6]).custom({color: [1,1,1]}).custom({focus: [1,0,0], spin: -Math.PI/3}),
		rectangle([x+0.002,y+0.05,z], [0.10,5.6]).custom({color: [1,0,0]}).custom({focus: [1,0,0], spin: Math.PI/3}),
		rectangle([x+0.002,y-0.05,z], [0.10,5.6]).custom({color: [1,0,0]}).custom({focus: [1,0,0], spin: -Math.PI/3}),
		rectangle([x+0.003,y,z], [0.6,5]).custom({color: [1,1,1]}).custom({focus: [1,0,0], spin: Math.PI/2}),
		rectangle([x+0.003,y,z], [0.6,3.1]).custom({color: [1,1,1]}).custom({focus: [1,0,0]}),
		rectangle([x+0.004,y,z], [0.25,5]).custom({color: [1,0,0]}).custom({focus: [1,0,0], spin: Math.PI/2}),
		rectangle([x+0.004,y,z], [0.27,3.1]).custom({color: [1,0,0]}).custom({focus: [1,0,0]})
	]);
	
	greece = group([
		rectangle([x,y,z],[5,2.65]).custom({color: [0,0,1.4]}).custom({focus: [1,0,0]}),
		rectangle([x+0.001,y+0.3,z],[5,0.33]).custom({color: [1,1,1]}).custom({focus: [1,0,0]}),
		rectangle([x+0.001,y-0.3,z],[5,0.33]).custom({color: [1,1,1]}).custom({focus: [1,0,0]}),
		rectangle([x+0.001,y-0.9,z],[5,0.33]).custom({color: [1,1,1]}).custom({focus: [1,0,0]}),
		rectangle([x+0.001,y+0.9,z],[5,0.33]).custom({color: [1,1,1]}).custom({focus: [1,0,0]}),
		rectangle([x+0.002,y-0.6,z-1.35],[2.5,1.5]).custom({color: [0,0,1.4]}).custom({focus: [1,0,0]}),
		rectangle([x+0.003,y-0.6,z-1.35],[0.4,1.5]).custom({color: [1,1,1]}).custom({focus: [1,0,0]}),
		rectangle([x+0.003,y-0.6,z-1.35],[2.5,0.4]).custom({color: [1,1,1]}).custom({focus: [1,0,0]}),

	]);	
	
	//Автоматично включване на бойните линии от опциите,
	document.getElementById('cbFirstLine').checked = true;
	document.getElementById('cbMiddleLine').checked = true;
	document.getElementById('cbMainLine').checked = true;
					
	//Април 1917 г. Английски войски нападат Българските
	//Май 1917 г. Английски войски нападат Българските	
	//позициониране на българските войски 
	bulgaria.center = [30,13.2,4];
	bg1 = sameAs(bulgaria);		
	bg1.center = [34,23.2,4];
	bg2 = sameAs(bulgaria);
	bg2.center = [22,6.2,4];
	bg3 = sameAs(bulgaria);
	bg3.center = [15,3.2,4];
	bg4 = sameAs(bulgaria);
	bg4.center = [-1.7,-10.2,4];
	bg5 = sameAs(bulgaria);
	bg5.center = [-3.2,-24.2,4];
	bg6 = sameAs(bulgaria);
	bg6.center = [1,-28.2,4];
	bg7 = sameAs(bulgaria);
	bg7.center = [-8,-40.2,4];
	bg8 = sameAs(bulgaria);
	bg8.center = [-10,5.5,4];
	
	bgVoiska = group([bulgaria,bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8]);
	
	//Автоматично изключване на българската войска
	bulgaria.visible = false;
	bgVoiska.visible = false;
	
	//позициониране на английската войска 
	england.center = [42,22,5];
	en1 = sameAs(england);	
	en1.center = [42,16.2,5];
	en2 = sameAs(england);
	en2.center = [45,11.2,5];
	en3 = sameAs(england);
	en3.center = [37,6.2,5];
	en4 = sameAs(england);
	en4.center = [29.7,0.2,5];
	en5 = sameAs(england);
	en5.center = [15.6,-7.2,5];
	en6 = sameAs(england);
	en6.center = [26.2,-14.2,5];
	en7 = sameAs(england);
	en7.center = [18,-23.2,5];
	en8 = sameAs(england);
	en8.center = [15,-30.2,5];
	en9 = sameAs(england);
	en9.center = [40,-10.5,5];
	
	enVoiska = group([england,en1,en2,en3,en4,en5,en6,en7,en8,en9]);
	
	//Автоматично изключване на английската войска 
	england.visible = false;
	enVoiska.visible = false;
									
	//Септември 1918 г. три английски, две гръцки дивизии, един сръбски и един френски полк
	
	//Гръцка войска			
	greece.center = [39,24,3];
	gr1 = sameAs(greece);
	gr1.center = [37,21,3];
	gr2 = sameAs(greece);
	gr2.center = [36,17,3];
	gr3 = sameAs(greece);
	gr3.center = [37,10.5,3];
	gr4 = sameAs(greece);
	gr4.center = [41,14,3];
	
	grVoiska = group([greece,gr1,gr2,gr3,gr4]);
	
	greece.visible = false;
	grVoiska.visible = false;
	
	//Сръбска войска	
	serbia.center = [36,7,3];		
	sr1 = sameAs(serbia);
	sr1.center = [41.5,5,3];
	
	srVoiska = group([serbia,sr1]);
	
	serbia.visible = false;
	srVoiska.visible = false;
	
	//Френска войска
	france.center = [41,-6,3];
	fr1 = sameAs(france);
	fr1.center = [36,-5,3];
	fr2 = sameAs(france);
	fr2.center = [30,-9,3];
	
	frVoiska = group([france,fr1,fr2]);
	
	france.visible = false;
	frVoiska.visible = false;
	
	//Английска войска		
	england.visible = true;
	env1 = sameAs(england);
	env1.center = [20,-9,3];
	env2 = sameAs(england);
	env2.center = [24,-14,3];
	env3 = sameAs(england);
	env3.center = [33,-15,3];
	env4 = sameAs(england);
	env4.center = [42,-13,3];
	env5 = sameAs(england);
	env5.center = [37,-18,3];
	env6 = sameAs(england);
	env6.center = [21,-20,3];
	env7 = sameAs(england);
	env7.center = [25,-24,3];
	env8 = sameAs(england);
	env8.center = [14,-29,3];

	envVoiska = group([env1,env2,env3,env4,env5,env6,env7,env8]);

	england.visible = false;
	envVoiska.visible = false;
	
	/* 
	Moving object on line, but it works just for simple objects. Do not work for group objects.
	A = [42,16.2,5];
	B = [37,16.2,5];
	segment(A,B).custom({color:[0,0.5,1]});

	AB = vectorPoints(B,A);
	L = AB[0]*AB[0]+AB[1]*AB[1];
	
	e = sphere([42,16.2,5], 0.8).custom({interactive: true});
	e.center = [42,16.2,5];
	
	p.nextFrame = animate;
	*/
	
}
/*
//functions for moving
var obj = null;

function mouseDown(event){
	x = event.clientX;
	y = event.clientY;
	obj = p.objectAtPoint(x,y);
	mouseMove(event);
}

function mouseUp(event){
	obj = null;
}

function mouseMove(event){
	
		x = event.clientX-event.target.offsetLeft-event.target.offsetWidth/2;
		y = -(event.clientY-event.target.offsetTop-event.target.offsetHeight/2);

}

function animate(){
	if (obj)
	{
		// изчисляване на k
		k =(((x-A[0])*AB[0]+(y-A[1])*AB[1])/L)/100;

		if (k<0) k=0;
		if (k>1) k=1;
		
		// намиране на най-близката до C точка
		e.center[0] = A[0]+k*AB[0];
		e.center[1] = A[1]+k*AB[1];
	}
}
*/

function firstLine(){
	prednaZashtitnaLiniq.visible = !prednaZashtitnaLiniq.visible;
}

function secondLine(){
	mejdinnaZashtitnaLiniq.visible = !mejdinnaZashtitnaLiniq.visible;
}

function mainLine(){
	glavnaZashtitnaLiniq.visible = !glavnaZashtitnaLiniq.visible;
}			

function aprilMay17(){
	bgVoiska.visible = !bgVoiska.visible;
	enVoiska.visible = !enVoiska.visible;
}

function september18(){
	bgVoiska.visible = !bgVoiska.visible;
	envVoiska.visible = !envVoiska.visible;
	grVoiska.visible = !grVoiska.visible;
	frVoiska.visible = !frVoiska.visible;
	france.visible = !france.visible;
	srVoiska.visible = !srVoiska.visible;
	serbia.visible = !serbia.visible;
}

// показване и скриване на секция
function sectionVisible(that,id){
	var e = document.getElementById(id);
	
	if (e.style.display!='block'){
		e.style.display='block';
	}else{
		e.style.display='none';
	}
	
	if (id[0]=='s')
	{
		if (e.style.display=='block'){
			that.innerHTML='Скрий решението'
		}else{
			that.innerHTML='Покажи решението';
		}
	}
}
