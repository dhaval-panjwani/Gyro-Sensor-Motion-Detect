import React from 'react';
import './MotionGame.css';
class MotionGame extends React.Component {

    componentDidMount() {
        window.addEventListener('deviceorientation', deviceOrientationListener);
        // var ball = document.querySelector('.ball');
        // var garden = document.querySelector('.garden');
        // var output = document.querySelector('.output');

        // // var ball = document.getElementById('ball');
        // // var garden = document.getElementById('garden');
        // // var output = document.getElementById('output');

        // // var ball = document.querySelector('ball');
        // // var garden = document.querySelector('garden');
        // // var output = document.querySelector('output');

        // var maxX = garden.clientWidth - ball.clientWidth;
        // var maxY = garden.clientHeight - ball.clientHeight;

        // function handleOrientation(event) {


        //     var x = event.alpha;  // In degree in the range [-180,180]
        //     var y = event.beta; // In degree in the range [-90,90]

        //     output.innerHTML = "beta : " + x + "\n";
        //     output.innerHTML += "gamma: " + y + "\n";
        //     output.innerHTML += "alpha: " + event.gamma + "\n";
        //     output.innerHTML += "absolute: " + event.absolute + "\n";

        //     // var x = event.beta;  // In degree in the range [-180,180]
        //     // var y = event.gamma; // In degree in the range [-90,90]

        //     // output.innerHTML = "beta : " + x + "\n";
        //     // output.innerHTML += "gamma: " + y + "\n";
        //     // output.innerHTML += "alpha: " + event.alpha + "\n";
        //     // output.innerHTML += "absolute: " + event.absolute + "\n";


        //     // Because we don't want to have the device upside down
        //     // We constrain the x value to the range [-90,90]
        //     if (x > 90) { x = 90 };
        //     if (x < -90) { x = -90 };

        //     // To make computation easier we shift the range of 
        //     // x and y to [0,180]
        //     // x += 90;
        //     // y += 90;

        //     // 10 is half the size of the ball
        //     // It center the positioning point to the center of the ball
        //     ball.style.top = (maxY * y / 180 - 10) + "px";
        //     ball.style.left = (maxX * x / 180 - 10) + "px";
        // }

        function deviceOrientationListener(event) {
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");

            ctx.clearRect(0, 0, c.width, c.height);
            ctx.fillStyle = "#FF7777";
            ctx.font = "14px Verdana";
            var alpha = event.alpha;
            ctx.fillText("Alpha: " + alpha, 10, 20);
            ctx.beginPath();
            ctx.moveTo(180, 75);
            ctx.lineTo(210, 75);
            ctx.arc(180, 75, 60, 0, event.alpha * Math.PI / 180);
            ctx.fill();

            ctx.fillStyle = "#FF6600";
            ctx.fillText("Beta: " + Math.round(event.beta), 10, 140);
            ctx.beginPath();
            ctx.fillRect(180, 150, event.beta, 90);

            ctx.fillStyle = "#FF0000";
            ctx.fillText("Gamma: " + Math.round(event.gamma), 10, 270);
            ctx.beginPath();
            ctx.fillRect(90, 340, 180, event.gamma);
        }



    }




    render() {

        const canvasStyle = {
            border: "1px solid #d3d3d3",

        }

        return (
            <div><canvas id="myCanvas" width="360" height="450" style={canvasStyle}>
            </canvas>
                <p class="love">Made with Love
                    by Dhaval Panjwani</p>
            </div>

        )
    }
}
export default MotionGame