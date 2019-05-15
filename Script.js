function Rectangle(height, width) {
    this.h = height;
    this.w = width;
    this.setwidth = function (width) {
        this.w = width;
    };
    this.setheight = function (height) {
        this.h = height;
    };
    this.Area = function () {
        return this.h * this.w;
    };
    this.Perimeter = function () {
        return 2 * this.h + 2*this.w;
    };
}

function Draw() {
    let h = parseInt(document.getElementById('height').value);
    let w = parseInt(document.getElementById('width').value);
    let Rec=new Rectangle(h,w);
    let rec = document.getElementById('Rectangle').getContext('2d');
    if (h > 0 && w > 0) {
        rec.clearRect(0,0,800,600);
        rec.beginPath();
        rec.rect(200,200,Rec.h,Rec.w);
        rec.stroke();
        rec.closePath();
    let area=Rec.Area();
    let perimeter=Rec.Perimeter();
    document.getElementById('Area').innerHTML=area;
    document.getElementById('perimeter').innerHTML=perimeter;
    }

}
