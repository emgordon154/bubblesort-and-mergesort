describe('Bubble Sort', function(){
  beforeEach(function() {
    spyOn(Array.prototype, 'swap').and.callThrough(); // replace existing global swap function
    spyOn(Array.prototype, 'compare').and.callThrough(); //replace existing global compare function
  })
  
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect( Array.prototype.swap.calls.count()).toEqual(0);
    expect( Array.prototype.compare.calls.count()).toEqual(0);
  });

  //let array = [];


  it("won't change an array that's already sorted", function() {
    expect( bubbleSort( [1,2,3,4] )).toEqual( [1,2,3,4] )
    expect( Array.prototype.swap.calls.count()).toEqual(0);
    expect( Array.prototype.compare.calls.count()).toEqual(3);
  });


  it("sorts an array of two items", function() {
    expect( bubbleSort( [2,1] )).toEqual( [1,2] )
    expect( Array.prototype.swap.calls.count()).toEqual(1);
    expect( Array.prototype.compare.calls.count()).toEqual(1);
  });

  it('sorts a larger array', function() {
    let randomArray = [];
    let randomLength = 5 + Math.round(Math.random()*100);
    for (let i=0; i < randomLength; i++) {
      randomArray.push(Math.round(Math.random()*1000))
    }
    expect( bubbleSort( randomArray )).toEqual( randomArray.sort() )
  })

  it('sorts another larger array', function() {
    let randomArray = [];
    let randomLength = 5 + Math.round(Math.random()*100);
    for (let i=0; i < randomLength; i++) {
      randomArray.push(Math.round(Math.random()*1000))
    }
    expect( bubbleSort( randomArray )).toEqual( randomArray.sort() )
  })

  it('sorts yet another larger array', function() {
    let randomArray = [];
    let randomLength = 5 + Math.round(Math.random()*100);
    for (let i=0; i < randomLength; i++) {
      randomArray.push(Math.round(Math.random()*1000))
    }
    expect( bubbleSort( randomArray )).toEqual( randomArray.sort() )
  })
});