function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value ;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get triangle height value 

    const heightField = document.getElementById('triangle-height')
    const heightValueText = heightField.value ;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area= 0.5* base * height;
    console.log(area)

    const trianglesum = document.getElementById('triangle-area');
    trianglesum.innerText=area
}

function calculateRectangleArea(){

    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value ;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lengthField = document.getElementById('rectangle-length').value;
    // const lengthValueText = lengthField.value ;
    const length = parseFloat(lengthField);
    console.log(length);
     
    const areas = width * length;
    const rectangleSum = document.getElementById('rectangle-area');
    rectangleSum.innerText = areas;
}