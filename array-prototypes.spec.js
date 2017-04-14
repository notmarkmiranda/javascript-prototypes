describe ('Array Prototypes - map()', function() {
  it('uses map() to add 1', function() {
    var start = [0, 1, 2, 3, 4, 5]
    var expectedReturn = [1, 2, 3, 4, 5, 6]

    expect(
      // this is just an example, move on to the next one
      start.map(function(num) { return num + 1 })
    ).toEqual(expectedReturn)
  });

  xit('uses map() to convert to celsius', function() {
    var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120]
    var expectedReturn = [-18, 0, 7, 10, 24, 27, 37, 49]

    expect(
      // your code goes here
    ).toEqual(expectedReturn);
  });

  xit('uses map() to fix formatting and concat index', function() {
    var words = ['fIRst', 'seconD', 'third', 'FOURTH']
    var expectedReturn = ['First - 1', 'Second - 2', 'Third - 3', 'Fourth - 4']

    expect(
      // your code goes here
    ).toEqual(expectedReturn)
  })

  xit('uses map() to rewrite attributes on objects', function() {
    var start = [
      { name: "mark", startingYear: 2016 },
      { name: "sal", startingYear: 2012 },
      { name: "john", startingYear: 2010 },
      { name: "josh", startingYear: 2003 },
      { name: "matt", startingYear: 2000 },
      { name: "claudia", startingYear: 2000 },
      { name: "jared", startingYear: 2005 },
      { name: "jeneve", startingYear: 2012 }
    ]
    var end = [
      { firstName: "Mark", yearsWorked: 1 },
      { firstName: "Sal", yearsWorked: 5 },
      { firstName: "John", yearsWorked: 7 },
      { firstName: "Josh", yearsWorked: 14 },
      { firstName: "Matt", yearsWorked: 17 },
      { firstName: "Claudia", yearsWorked: 17 },
      { firstName: "Jared", yearsWorked: 12 },
      { firstName: "Jeneve", yearsWorked: 5 },
    ]

    expect(
      // your code goes here
    ).toEqual(end)
  })
});


describe('Array Prototypes - filter()', function() {
  xit('uses filter() to filter out even numbers', function() {
    var startingArray = [34, 17, 26, 9, 47, 0, 37, 5, 4, 2, 16, 119, 117, 118]
    var endingArray = [17, 9, 47, 37, 5, 119, 117]

    expect(
      // your code goes here

    ).toEqual(endingArray)
  })

  xit('uses filter() to filter based on word length greater than 3', function() {
    var startingArray = ['bear', 'cat', 'elephant', 'kangaroo', 'dog', 'zebra', 'pig']
    var endingArray = ['bear', 'elephant', 'kangaroo', 'zebra']

    expect(
      // your code goes here

    ).toEqual(endingArray)
  })

  xit('uses filter() with object attributes - balance greater than 100', function() {
    var startingPeople = [
      { name: "Mark", balance: '100' },
      { name: "Sal", balance: '101' },
      { name: "John", balance: '11' },
      { name: "Josh", balance: '219' },
      { name: "Matt", balance: '29' },
      { name: "Claudia", balance: '77' },
      { name: "Jared", balance: '177' },
      { name: "Jeneve", balance: '164' }
    ]
    var endingPeople = [
      { name: "Sal", balance: '101' },
      { name: "Josh", balance: '219' },
      { name: "Jared", balance: '177' },
      { name: "Jeneve", balance: '164' },
    ]

    expect(
      // your code goes here

    ).toEqual(endingPeople)
  })

})

describe('Array Prototypes - reduce()', function() {
  xit('uses reduce() to sum numbers', function() {
    var startingArray = [125, 16, 9234, 323, 21, 499, 28]
    expect(
      // your code goes here

    ).toEqual(10246)
  })

  xit('uses reduce() to add word lengths', function() {
    var startingArray = ['banana', 'pear', 'apple', 'orange', 'lemon', 'mango']
    expect(
      // your code goes here

    ).toEqual(31)
  })

})
