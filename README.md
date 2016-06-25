# Zumo32U4Blocks
Repository for Blocklyduino js code used to create new blocks for Polulu robot (Zumo32U4)

CONTEXT:
I am a secondary teacher in Australia developing an environment for my year 10 students that will encourage them to code.
I have a couple of Zumo 32U4 robots from Polulu.  They are Arduino based.
As a starting point i am making Blocklyduino blocks for the Zumo bots so the students can quickly get into moving the bots around.
I have created this repository so i can get feedback on some of the issues im having with the blocks.

TO USE:  
You need 3 things:

1) Blocklyduino copied to your local drive (see https://github.com/BlocklyDuino/BlocklyDuino) i.e. dont run it from the online server

2) the two zumo32U4.js files included in this repository placed in Blocklyduino/blockly/.  One in the blocks directory and one in the generators directory.

3) add the following to the end of Blocklyduino/blockly/apps/blocklyduino/index.html
Alternatively i have now (24/6/2016) added the index file to the repository.  Just copy it to the right directory.
	<category name="Zumo"
           <block type="output_leftzmotor"></block>
           <block type="output_rightzmotor"></block>
           <block type="zprox_sense"></block>
           <block type="button_a"></block>
           <block type="button_b"></block>
           <block type="button_c"></block>
           <block type="lcd_clear"></block>
           <block type="lcd_string"></block>
           <block type="lcd_number"></block>
    </category>
    
If you are working with the Zumo 32U4 bot then i assume you are already familiar with uploading code to it from the 
Arduino IDE (Google: "arduino").  You will need the Pololu libraries and board drivers for Zumo32U4 from the Pololu site.
Sounds like a bit of mucking around but you've got this far.  One step at a time it can be done.
I run the whole setup from a USB drive when working in the classroom.

Authors and Contributors

Fred Lin (@gasolin) @taipan541 @jwill4

Thanks Neil Fraser, Q.Neutron from Blockly https://developers.google.com/blockly/ Thanks Dale Low (gumbypp) for contribute the python server to pipe BlocklyDuino source to arduino board. Thanks Arduino and Seeeduino guys for Arduino and Grove blocks.

The project is also inspired by arduiblock and modkit

License

Copyright (C) 2012~2016 Original Developer: Fred Lin gasolin+blockly@gmail.com Extension Developer: taipan541

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at *
http://www.apache.org/licenses/LICENSE-2.0
