class Points{
  constructor(){
    this.points = 0;
  }
  exibe(){
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(parseInt(this.points), width - 30, 50);
  }

  adicionarPonto(){
    textFont(fontMenu);
    this.points = this.points + 0.2;
  }
}