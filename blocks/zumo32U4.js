/* Generates code in Blocklyduino environment for use with Pololu Zumo 32U4 mini-sumo robot

To use Zumo 32U4 blocks in Blocklyduino you need 4 things:
1) Blocklyduino installed on your local computer (see https://github.com/BlocklyDuino/BlocklyDuino)
2) this zumo32U4.js file in Blocklyduino\blockly\blocks
3) another zumo32U4.js file (included in this repository) for building code in Blocklyduino\blockly\generators
4) add the following to the end of index.html file in Blocklyduino\blockly\apps\blocklyduino\
	<category name="Zumo">
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
Arduino IDE (check Pololu site).  You will need the Pololu libraries and board drivers for Zumo32U4 from the Pololu site.

I run the whole setup from a USB drive when working in the classroom.

Author jwill4 */

/* Credit to Fred Lin for developing the original Blocklyduino code
https://github.com/BlocklyDuino/BlocklyDuino */




'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.zumo32U4');

goog.require('Blockly.Blocks');

Blockly.Blocks['output_leftzmotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zumo Left Motor")
        .appendField(new Blockly.FieldDropdown([["Forward", "FORWARD"], ["Backward", "BACKWARD"]]), "Direction");
    this.appendValueInput("SPEED")
        .setCheck(null)
        .appendField("Speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
    this.setTooltip('Set left motor speed (0-400) and direction');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['output_rightzmotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zumo Right Motor")
        .appendField(new Blockly.FieldDropdown([["Forward", "FORWARD"], ["Backward", "BACKWARD"]]), "Direction");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("Speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(50);
    this.setTooltip('Set left motor speed (0-400) and direction');
    this.setHelpUrl('http://www.example.com/');
  }
};
/* Edit IR Reflected Proximity sensor block here: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#822tjv
*/
Blockly.Blocks['zprox_sense_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Proximity IR Read");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('Turns on Front IR LEDs and stores the level of IR reflected from each sensor.  The level of IR reflected can be accessed using the Proximity IR Reflected block');
    this.setHelpUrl('https://www.pololu.com/docs/0J63');
  }
};
/* Edit IR Reflected Proximity sensor block here:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#jy5cz3
*/
Blockly.Blocks['zprox_sense'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Proximity IR Reflected");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Front_Left", "FRONT_LEFT"], ["Front_Right", "FRONT_RIGHT"], ["Side_Left", "SIDE_LEFT"], ["Side_Right", "SIDE_RIGHT"]]), "SENSOR");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(30);
    this.setTooltip('Returns a reflected IR brightness level with front IR LEDS on: 1(low), 2, 3, 4, 5, 6(high), AFTER using the Proximity IR Read block');
    this.setHelpUrl('https://www.pololu.com/docs/0J63');
  }
};
/* Edit Button block here:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2wx7jd
*/
Blockly.Blocks['button_a'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button A");
    this.setOutput(true, "Boolean");
    this.setColour(10);
    this.setTooltip('returns a true or false');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['button_b'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button B");
    this.setOutput(true, "Boolean");
    this.setColour(10);
    this.setTooltip('returns a true or false');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['button_c'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button C");
    this.setOutput(true, "Boolean");
    this.setColour(10);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['lcd_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LCD clear");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(10);
    this.setTooltip('returns a true or false');
    this.setHelpUrl('http://www.example.com/');
  }
};
/* Edit LCD string block here: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#a7yndq
*/
Blockly.Blocks['lcd_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LCD string  \"")
        .appendField(new Blockly.FieldTextInput("Hello"), "LCD_STRING")
        .appendField("\"");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(10);
    this.setTooltip('prints string to LCD screen');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['lcd_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LCD number");
    this.appendValueInput("lcd_number")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(10);
    this.setTooltip('prints number to LCD screen');
    this.setHelpUrl('http://www.example.com/');
  }
};
