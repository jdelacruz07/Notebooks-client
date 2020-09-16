import { Notebook } from './notebook';

describe('Notebook', () => {
  it('should create an instance', () => {
    expect(new Notebook("1","Juana","Clasica","blue","100","piel","carta",250,"../assets/namePicture")).toBeTruthy();
  });
});
