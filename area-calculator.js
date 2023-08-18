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
// add to calculation Entry
/*

*/
function addToCalculationEntry(areaType,area){
      console.log('areaType', '' + area)
    
    const calculationEntry = document.getElementById('calculation-entry')

      const p = document.createElement('p')
      p.innerHTML=areaType + '', +area;
      calculationEntry.appendChlid(p)

}

// validate input 

if(isNaN(width) || isNaN(length)){
    alert('vai number den ')
}

    //  calculate area
    const areas = width * length;
    const rectangleSum = document.getElementById('rectangle-area');
    rectangleSum.innerText = areas;
}

// reusable function -- reduce duplicate code

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
     console.log(base);
    const height = getInputValue('parallelogram-height')
    console.log(height);
   if(isNaN(base) || isNaN(height)){
    alert('Please insert valid number')
    return
   }
    const area = base * height;
    setElementInnerText('parallelogram-area', area)

    addToCalculationEntry('Parallelogram',area)
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius')
    const minorRadius =getInputValue('ellipse-minor-radius')
    const areas = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal =areas.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal)
}
// resuable get input value field in number

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText =inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// resuable set span p etc text

function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId)

    element.innerText =area;
}

// data validation


/*
1. set the proper type of the input field (number,data , email)
2 check type using typeof
3 Nan means : Not a number isNan is checking whether the input is not a number 
*/