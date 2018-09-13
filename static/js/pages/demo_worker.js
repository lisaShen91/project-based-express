/**
 * Created by shenlisha on 2018/3/28.
 */
var i = 0;
function timeCounter() {
	i = i + 1;
	postMessage(i);
	setTimeout("timeCounter()", 500);
}
timeCounter();