angular.module('newSpeakApp')
.factory('transferData', function() {

  var service = {
    save: function(president, word) {
      
    },

    presidents: ['George Washington', 'John Adams', 'Thomas Jefferson', 'James Madison', 'James Monroe',
        'John Quincy Adams', 'Andrew Jackson', 'Martin Van Buren', 'William H. Harrison', 'John Tyler', 'James K. Polk',
        'Zachary Taylor', 'Millard Fillmore', 'Franklin Pierce', 'James Buchanan', 'Abraham Lincoln', 'Andrew Johnson',
        'Ulysses S. Grant', 'Rutherford B. Hayes', 'James A. Garfield', 'Chester A. Arthur', 'Grover Cleveland',
        'Benjamin Harrison', 'William McKinley', 'Theodore Roosevelt', 'William H. Taft',
        'Woodrow Wilson', 'Warren G. Harding', 'Calvin Coolidge', 'Herbert Hoover', 'Franklin D. Roosevelt',
        'Harry S. Truman', 'Dwight D. Eisenhower', 'John F. Kennedy', 'Lyndon B. Johnson', 'Richard M. Nixon',
        'Gerald R. Ford', 'Jimmy Carter', 'Ronald Reagan','George H. W. Bush', 'Bill Clinton', 'George W. Bush', 'Barack Obama'
      ]

  };//end of service object
  
  return service;
});
