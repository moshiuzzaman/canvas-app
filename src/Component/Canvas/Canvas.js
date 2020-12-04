import React from 'react';
import './Canvas.css'

const Canvas = () => {
    let style ="red";
    let clearAll = false;
    //Now we will add the function for different button
        const RedPen=()=>style = "red";
        const GreenPen=()=>style = "green";
        const YellowPen=()=>style = "yellow";
        const BluePen=()=>style = "blue";
        const WhitePen=()=> clearAll=true;

        

    window.addEventListener('load', () =>{

        //Now let's Select our canvas
        let paint = document.querySelector('#paint')
        let ctx = paint.getContext("2d");
        let x = 0;
        let y = 0;
        let rect = paint.getBoundingClientRect();
        
        let isDrawing = false;
        
        //let's add the mouse event
        
        paint.addEventListener('mousedown', e => {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top; // to get the cursor position relative to the canvase
            isDrawing = true;
        })
        
        paint.addEventListener('mousemove', e => {
            if(isDrawing === true){
                lineDraw(ctx,x,y,e.clientX - rect.left,e.clientY - rect.top,style);
                x = e.clientX - rect.left;
                y = e.clientY - rect.top;
                //let's try it
            }
        })
        
        paint.addEventListener('mouseup', e => {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
            isDrawing = false;
            x = 0;
            y = 0;
            
        })
        
       
        
        
        
        
        
        
        //let's create the drawing function
        function lineDraw(ctx,x1,y1,x2,y2,styleColor){
            ctx.beginPath();
            ctx.strokeStyle = styleColor;
            ctx.lineWidht = 20;
            ctx.moveTo(x1,y1);
            ctx.lineTo(x2,y2);
            ctx.lineCap = ctx.lineJoin = 'round';
            ctx.shadowColor = styleColor;
            ctx.stroke();
            ctx.closePath()
        }
})

const downloadCanvas=()=>{
    let paint = document.querySelector('#paint')
    
        const a=document.createElement("a")
        document.body.appendChild(a);
        a.href=paint.toDataURL();
        a.download="canvas.png";
        console.log(a);
        a.click()
        
}
    return (
        <div className="painter">
            
            <div className="color_selector">
                <button onClick={()=>RedPen()} className="red_color_piker"></button>
                <button onClick={()=>GreenPen()} className="green_color_piker"></button>
                <button onClick={()=>YellowPen()} className="yellow_color_piker"></button>
                <button onClick={()=>BluePen()} className="blue_color_piker"></button>
               
            </div>
            <canvas width="1000px" height="500px" id="paint"></canvas>
            <button onClick={()=>downloadCanvas()} className="download">Download</button>
        </div>
    );
};

export default Canvas;