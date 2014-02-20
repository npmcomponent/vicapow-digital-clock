*This repository is a mirror of the [component](http://component.io) module [vicapow/digital-clock](http://github.com/vicapow/digital-clock). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/vicapow-digital-clock`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# digital clock
 a simple, responsive (and don't forget retro!) digital clock written entirely in CSS and JS. because, why not?

![digital clock](http://i.imgur.com/b6UvV.png)

## Installation

    $ component install vicapow/digital-clock

## API
````javascript
   var clock = new DigitalClock({seconds:true})
   clock.setHours(1)
   clock.setMinutes(23)
   clock.setSeconds(45)
   // or set via object
   clock.setTime(new Date)
````
## License

  MIT
