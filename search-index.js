var searchIndex = {};
searchIndex['simplot'] = {"items":[[0,"","simplot","Simple 2D plotting using `gnuplot`",null,null],[3,"Figure","","Plot container",null,null],[3,"BoxWidth","","Box width for box-related plots: bars, candlesticks, etc",null,null],[3,"Font","","A font name",null,null],[3,"FontSize","","The size of a font",null,null],[3,"Key","","The key or legend",null,null],[3,"Label","","Plot label",null,null],[3,"LineWidth","","Width of the lines",null,null],[3,"Opacity","","Fill color opacity",null,null],[3,"Output","","Output file path",null,null],[3,"PointSize","","Size of the points",null,null],[3,"Size","","Figure size",null,null],[3,"TicLabels","","Labels attached to the tics of an axis",null,null],[12,"labels","","Labels to attach to the tics",0,null],[12,"positions","","Position of the tics on the axis",0,null],[3,"Title","","Figure title",null,null],[3,"ScaleFactor","","Axis scale factor",null,null],[4,"Range","","Axis range",null,null],[13,"Auto","","Autoscale the axis",1,null],[13,"Limits","","Set the limits of the axis",1,null],[4,"Axes","","A pair of axes that define a coordinate system",null,null],[13,"BottomXLeftY","","",2,null],[13,"BottomXRightY","","",2,null],[13,"TopXLeftY","","",2,null],[13,"TopXRightY","","",2,null],[4,"Axis","","A coordinate axis",null,null],[13,"BottomX","","X axis on the bottom side of the figure",3,null],[13,"LeftY","","Y axis on the left side of the figure",3,null],[13,"RightY","","Y axis on the right side of the figure",3,null],[13,"TopX","","X axis on the top side of the figure",3,null],[4,"Color","","Color",null,null],[13,"Black","","",4,null],[13,"Blue","","",4,null],[13,"Cyan","","",4,null],[13,"DarkViolet","","",4,null],[13,"ForestGreen","","",4,null],[13,"Gold","","",4,null],[13,"Gray","","",4,null],[13,"Green","","",4,null],[13,"Magenta","","",4,null],[13,"Red","","",4,null],[13,"Rgb","","Custom RGB color",4,null],[13,"White","","",4,null],[13,"Yellow","","",4,null],[4,"Grid","","Grid line",null,null],[13,"Major","","Major gridlines",5,null],[13,"Minor","","Minor gridlines",5,null],[4,"LineType","","Line type",null,null],[13,"Dash","","",6,null],[13,"Dot","","",6,null],[13,"DotDash","","",6,null],[13,"DotDotDash","","",6,null],[13,"SmallDot","","Line made of minimally sized dots",6,null],[13,"Solid","","",6,null],[4,"PointType","","Point type",null,null],[13,"Circle","","",7,null],[13,"FilledCircle","","",7,null],[13,"FilledSquare","","",7,null],[13,"FilledTriangle","","",7,null],[13,"Plus","","",7,null],[13,"Square","","",7,null],[13,"Star","","",7,null],[13,"Triangle","","",7,null],[13,"X","","",7,null],[4,"Scale","","Axis scale",null,null],[13,"Linear","","",8,null],[13,"Logarithmic","","",8,null],[4,"Terminal","","Output terminal",null,null],[13,"Svg","","",9,null],[5,"version","","Returns `gnuplot` version",null,{"inputs":[],"output":{"name":"result"}}],[0,"axis","","Coordinate axis",null,null],[3,"Properties","simplot::axis","Properties of the coordinate axes",null,null],[11,"clone","","",10,{"inputs":[{"name":"properties"}],"output":{"name":"properties"}}],[11,"hide","","Hides the axis",10,{"inputs":[{"name":"properties"}],"output":{"name":"properties"}}],[11,"show","","Makes the axis visible",10,{"inputs":[{"name":"properties"}],"output":{"name":"properties"}}],[6,"Properties","","",null,null],[11,"configure","","Configures the gridlines",10,{"inputs":[{"name":"properties"},{"name":"grid"},{"name":"f"}],"output":{"name":"properties"}}],[11,"set","","Attaches a label to the axis",10,{"inputs":[{"name":"properties"},{"name":"label"}],"output":{"name":"properties"}}],[11,"set","","Changes the range of the axis that will be shown",10,{"inputs":[{"name":"properties"},{"name":"range"}],"output":{"name":"properties"}}],[11,"set","","Sets the scale of the axis",10,{"inputs":[{"name":"properties"},{"name":"scale"}],"output":{"name":"properties"}}],[11,"set","","Changes the *scale factor* of the axis.",10,{"inputs":[{"name":"properties"},{"name":"scalefactor"}],"output":{"name":"properties"}}],[11,"set","","Attaches labels to the tics of an axis",10,{"inputs":[{"name":"properties"},{"name":"ticlabels"}],"output":{"name":"properties"}}],[0,"candlestick","simplot","\"Candlestick\" plots",null,null],[3,"Properties","simplot::candlestick","Properties common to candlestick plots",null,null],[3,"Candlesticks","","A candlestick consists of a box and two whiskers that extend beyond the box",null,null],[12,"x","","X coordinate of the candlestick",11,null],[12,"whisker_min","","Y coordinate of the end point of the bottom whisker",11,null],[12,"box_min","","Y coordinate of the bottom of the box",11,null],[12,"box_high","","Y coordinate of the top of the box",11,null],[12,"whisker_high","","Y coordinate of the end point of the top whisker",11,null],[11,"set","","Sets the line color",12,{"inputs":[{"name":"properties"},{"name":"color"}],"output":{"name":"properties"}}],[11,"set","","Sets the legend label",12,{"inputs":[{"name":"properties"},{"name":"label"}],"output":{"name":"properties"}}],[11,"set","","Changes the line type",12,{"inputs":[{"name":"properties"},{"name":"linetype"}],"output":{"name":"properties"}}],[11,"set","","Changes the width of the line",12,{"inputs":[{"name":"properties"},{"name":"linewidth"}],"output":{"name":"properties"}}],[6,"Properties","","",null,null],[11,"plot","simplot","",13,{"inputs":[{"name":"figure"},{"name":"candlesticks"},{"name":"f"}],"output":{"name":"figure"}}],[0,"curve","","Simple \"curve\" like plots",null,null],[3,"Properties","simplot::curve","Properties common to simple \"curve\" like plots",null,null],[4,"Curve","","Types of \"curve\" plots",null,null],[13,"Dots","","A minimally sized dot on each data point",14,null],[12,"x","simplot::curve::Curve","X coordinate of the data points",14,null],[12,"y","","Y coordinate of the data points",14,null],[13,"Impulses","simplot::curve","A vertical \"impulse\" on each data point",14,null],[12,"x","simplot::curve::Curve","X coordinate of the data points",14,null],[12,"y","","Y coordinate of the data points",14,null],[13,"Lines","simplot::curve","Line that joins the data points",14,null],[12,"x","simplot::curve::Curve","X coordinate of the data points",14,null],[12,"y","","Y coordinate of the data points",14,null],[13,"LinesPoints","simplot::curve","Line with a point on each data point",14,null],[12,"x","simplot::curve::Curve","X coordinate of the data points",14,null],[12,"y","","Y coordinate of the data points",14,null],[13,"Points","simplot::curve","A point on each data point",14,null],[12,"x","simplot::curve::Curve","X coordinate of the data points",14,null],[12,"y","","Y coordinate of the data points",14,null],[13,"Steps","simplot::curve","An step `_|` between each data point",14,null],[12,"x","simplot::curve::Curve","X coordinate of the data points",14,null],[12,"y","","Y coordinate of the data points",14,null],[11,"set","simplot::curve","Select the axes to plot against",15,{"inputs":[{"name":"properties"},{"name":"axes"}],"output":{"name":"properties"}}],[11,"set","","Sets the line color",15,{"inputs":[{"name":"properties"},{"name":"color"}],"output":{"name":"properties"}}],[11,"set","","Sets the legend label",15,{"inputs":[{"name":"properties"},{"name":"label"}],"output":{"name":"properties"}}],[11,"set","","Changes the line type",15,{"inputs":[{"name":"properties"},{"name":"linetype"}],"output":{"name":"properties"}}],[11,"set","","Changes the width of the line",15,{"inputs":[{"name":"properties"},{"name":"linewidth"}],"output":{"name":"properties"}}],[11,"set","","Changes the size of the points",15,{"inputs":[{"name":"properties"},{"name":"pointsize"}],"output":{"name":"properties"}}],[11,"set","","Changes the point type",15,{"inputs":[{"name":"properties"},{"name":"pointtype"}],"output":{"name":"properties"}}],[6,"Properties","","",null,null],[11,"plot","simplot","",13,{"inputs":[{"name":"figure"},{"name":"curve"},{"name":"f"}],"output":{"name":"figure"}}],[0,"errorbar","","Error bar plots",null,null],[3,"Properties","simplot::errorbar","Properties common to error bar plots",null,null],[4,"ErrorBar","","Asymmetric error bar plots",null,null],[13,"XErrorBars","","Horizontal error bars",16,null],[12,"x","simplot::errorbar::ErrorBar","X coordinate of the data points",16,null],[12,"y","","Y coordinate of the data points",16,null],[12,"x_low","","X coordinate of the left end of the error bar",16,null],[12,"x_high","","Y coordinate of the right end of the error bar",16,null],[13,"XErrorLines","simplot::errorbar","Horizontal error bars, where each point is joined by a line",16,null],[12,"x","simplot::errorbar::ErrorBar","X coordinate of the data points",16,null],[12,"y","","Y coordinate of the data points",16,null],[12,"x_low","","X coordinate of the left end of the error bar",16,null],[12,"x_high","","Y coordinate of the right end of the error bar",16,null],[13,"YErrorBars","simplot::errorbar","Vertical error bars",16,null],[12,"x","simplot::errorbar::ErrorBar","X coordinate of the data points",16,null],[12,"y","","Y coordinate of the data points",16,null],[12,"y_low","","Y coordinate of the bottom of the error bar",16,null],[12,"y_high","","Y coordinate of the top of the error bar",16,null],[13,"YErrorLines","simplot::errorbar","Vertical error bars, where each point is joined by a line",16,null],[12,"x","simplot::errorbar::ErrorBar","X coordinate of the data points",16,null],[12,"y","","Y coordinate of the data points",16,null],[12,"y_low","","Y coordinate of the bottom of the error bar",16,null],[12,"y_high","","Y coordinate of the top of the error bar",16,null],[11,"set","simplot::errorbar","Changes the color of the error bars",17,{"inputs":[{"name":"properties"},{"name":"color"}],"output":{"name":"properties"}}],[11,"set","","Sets the legend label",17,{"inputs":[{"name":"properties"},{"name":"label"}],"output":{"name":"properties"}}],[11,"set","","Change the line type",17,{"inputs":[{"name":"properties"},{"name":"linetype"}],"output":{"name":"properties"}}],[11,"set","","Changes the linewidth",17,{"inputs":[{"name":"properties"},{"name":"linewidth"}],"output":{"name":"properties"}}],[11,"set","","Changes the size of the points",17,{"inputs":[{"name":"properties"},{"name":"pointsize"}],"output":{"name":"properties"}}],[11,"set","","Changes the point type",17,{"inputs":[{"name":"properties"},{"name":"pointtype"}],"output":{"name":"properties"}}],[6,"Properties","","",null,null],[11,"plot","simplot","",13,{"inputs":[{"name":"figure"},{"name":"errorbar"},{"name":"f"}],"output":{"name":"figure"}}],[0,"filledcurve","","Filled curve plots",null,null],[3,"Properties","simplot::filledcurve","Properties common to filled curve plots",null,null],[3,"FilledCurve","","Fills the area between two curves",null,null],[12,"x","","X coordinate of the data points of both curves",18,null],[12,"y1","","Y coordinate of the data points of the first curve",18,null],[12,"y2","","Y coordinate of the data points of the second curve",18,null],[11,"set","","Select axes to plot against",19,{"inputs":[{"name":"properties"},{"name":"axes"}],"output":{"name":"properties"}}],[11,"set","","Sets the fill color",19,{"inputs":[{"name":"properties"},{"name":"color"}],"output":{"name":"properties"}}],[11,"set","","Sets the legend label",19,{"inputs":[{"name":"properties"},{"name":"label"}],"output":{"name":"properties"}}],[11,"set","","Changes the opacity of the fill color",19,{"inputs":[{"name":"properties"},{"name":"opacity"}],"output":{"name":"properties"}}],[6,"Properties","","",null,null],[11,"plot","simplot","",13,{"inputs":[{"name":"figure"},{"name":"filledcurve"},{"name":"f"}],"output":{"name":"figure"}}],[0,"grid","","Gridline",null,null],[3,"Properties","simplot::grid","Gridline properties",null,null],[11,"clone","","",20,{"inputs":[{"name":"properties"}],"output":{"name":"properties"}}],[11,"hide","","Hides the gridlines",20,{"inputs":[{"name":"properties"}],"output":{"name":"properties"}}],[11,"show","","Shows the gridlines",20,{"inputs":[{"name":"properties"}],"output":{"name":"properties"}}],[0,"key","simplot","Key (or legend)",null,null],[3,"Properties","simplot::key","Properties of the key",null,null],[4,"Boxed","","Whether the key is surrounded by a box or not",null,null],[13,"No","","",21,null],[13,"Yes","","",21,null],[4,"Horizontal","","Horizontal position of the key",null,null],[13,"Center","","Center of the figure",22,null],[13,"Left","","Left border of the figure",22,null],[13,"Right","","Right border of the figure",22,null],[4,"Justification","","Text justification of the key",null,null],[13,"Left","","",23,null],[13,"Right","","",23,null],[4,"Order","","Order of the elements of the key",null,null],[13,"SampleText","","Sample first, then text",24,null],[13,"TextSample","","Text first, then sample",24,null],[4,"Position","","Position of the key",null,null],[13,"Inside","","Inside the area surrounded by the four (BottomX, TopX, LeftY and RightY) axes",25,null],[13,"Outside","","Outside of that area",25,null],[4,"Stacked","","How the entries of the key are stacked",null,null],[13,"Horizontally","","",26,null],[13,"Vertically","","",26,null],[4,"Vertical","","Vertical position of the key",null,null],[13,"Bottom","","Bottom border of the figure",27,null],[13,"Center","","Center of the figure",27,null],[13,"Top","","Top border of the figure",27,null],[11,"clone","","",28,{"inputs":[{"name":"properties"}],"output":{"name":"properties"}}],[11,"hide","","Hides the key",28,{"inputs":[{"name":"properties"}],"output":{"name":"properties"}}],[11,"show","","Shows the key",28,{"inputs":[{"name":"properties"}],"output":{"name":"properties"}}],[11,"set","","Select if the key will be surrounded with a box or not",28,{"inputs":[{"name":"properties"},{"name":"boxed"}],"output":{"name":"properties"}}],[11,"set","","Changes the justification of the text of each entry",28,{"inputs":[{"name":"properties"},{"name":"justification"}],"output":{"name":"properties"}}],[11,"set","","How to order each entry",28,{"inputs":[{"name":"properties"},{"name":"order"}],"output":{"name":"properties"}}],[11,"set","","Selects where to place the key",28,{"inputs":[{"name":"properties"},{"name":"position"}],"output":{"name":"properties"}}],[11,"set","","Changes how the entries of the key are stacked",28,{"inputs":[{"name":"properties"},{"name":"stacked"}],"output":{"name":"properties"}}],[11,"set","","",28,{"inputs":[{"name":"properties"},{"name":"title"}],"output":{"name":"properties"}}],[11,"clone","","",21,{"inputs":[{"name":"boxed"}],"output":{"name":"boxed"}}],[11,"clone","","",22,{"inputs":[{"name":"horizontal"}],"output":{"name":"horizontal"}}],[11,"clone","","",23,{"inputs":[{"name":"justification"}],"output":{"name":"justification"}}],[11,"clone","","",24,{"inputs":[{"name":"order"}],"output":{"name":"order"}}],[11,"clone","","",25,{"inputs":[{"name":"position"}],"output":{"name":"position"}}],[11,"clone","","",26,{"inputs":[{"name":"stacked"}],"output":{"name":"stacked"}}],[11,"clone","","",27,{"inputs":[{"name":"vertical"}],"output":{"name":"vertical"}}],[0,"prelude","simplot","A collection of the most used traits, structs and enums",null,null],[0,"proxy","","Generic constructors for newtypes",null,null],[5,"Font","simplot::proxy","Generic constructor for `Font`",null,{"inputs":[{"name":"s"}],"output":{"name":"font"}}],[5,"Label","","Generic constructor for `Label`",null,{"inputs":[{"name":"s"}],"output":{"name":"label"}}],[5,"Title","","Generic constructor for `Title`",null,{"inputs":[{"name":"s"}],"output":{"name":"title"}}],[5,"Output","","Generic constructor for `Output`",null,{"inputs":[{"name":"p"}],"output":{"name":"output"}}],[0,"traits","simplot","Traits",null,null],[8,"Configure","simplot::traits","Overloaded `configure` method",null,null],[16,"Properties","","The properties of what's being configured",29,null],[10,"configure","","Configure some set of properties",29,{"inputs":[{"name":"configure"},{"name":"this"},{"name":"f"}],"output":{"name":"self"}}],[8,"Data","","Types that can be plotted",null,null],[10,"f64","","Convert the type into a double precision float",30,{"inputs":[{"name":"data"}],"output":{"name":"f64"}}],[8,"Plot","","Overloaded `plot` method",null,null],[16,"Properties","","The properties associated to the plot",31,null],[10,"plot","","Plots some `data` with some `configuration`",31,{"inputs":[{"name":"plot"},{"name":"this"},{"name":"f"}],"output":{"name":"self"}}],[8,"Set","","Overloaded `set` method",null,null],[10,"set","","Sets some property",32,{"inputs":[{"name":"set"},{"name":"t"}],"output":{"name":"self"}}],[11,"clone","simplot","",13,{"inputs":[{"name":"figure"}],"output":{"name":"figure"}}],[11,"new","","Creates an empty figure",13,{"inputs":[{"name":"figure"}],"output":{"name":"figure"}}],[11,"draw","","Spawns a drawing child process",13,{"inputs":[{"name":"figure"}],"output":{"name":"result"}}],[11,"dump","","Dumps the script required to produce the figure into `sink`",13,{"inputs":[{"name":"figure"},{"name":"w"}],"output":{"name":"result"}}],[11,"save","","Saves the script required to produce the figure to `path`",13,{"inputs":[{"name":"figure"},{"name":"path"}],"output":{"name":"result"}}],[6,"Properties","","",null,null],[11,"configure","","Configures an axis",13,{"inputs":[{"name":"figure"},{"name":"axis"},{"name":"f"}],"output":{"name":"figure"}}],[6,"Properties","","",null,null],[11,"configure","","Configures the key (legend)",13,{"inputs":[{"name":"figure"},{"name":"key"},{"name":"f"}],"output":{"name":"figure"}}],[11,"set","","Changes the box width of all the box related plots (bars, candlesticks, etc)",13,{"inputs":[{"name":"figure"},{"name":"boxwidth"}],"output":{"name":"figure"}}],[11,"set","","Changes the font",13,{"inputs":[{"name":"figure"},{"name":"font"}],"output":{"name":"figure"}}],[11,"set","","Changes the size of the font",13,{"inputs":[{"name":"figure"},{"name":"fontsize"}],"output":{"name":"figure"}}],[11,"set","","Changes the output file",13,{"inputs":[{"name":"figure"},{"name":"output"}],"output":{"name":"figure"}}],[11,"set","","Changes the figure size",13,{"inputs":[{"name":"figure"},{"name":"size"}],"output":{"name":"figure"}}],[11,"set","","Changes the output terminal",13,{"inputs":[{"name":"figure"},{"name":"terminal"}],"output":{"name":"figure"}}],[11,"set","","Sets the title",13,{"inputs":[{"name":"figure"},{"name":"title"}],"output":{"name":"figure"}}],[11,"clone","","",33,{"inputs":[{"name":"boxwidth"}],"output":{"name":"boxwidth"}}],[11,"clone","","",34,{"inputs":[{"name":"fontsize"}],"output":{"name":"fontsize"}}],[11,"clone","","",35,{"inputs":[{"name":"key"}],"output":{"name":"key"}}],[11,"clone","","",36,{"inputs":[{"name":"linewidth"}],"output":{"name":"linewidth"}}],[11,"clone","","",37,{"inputs":[{"name":"opacity"}],"output":{"name":"opacity"}}],[11,"clone","","",38,{"inputs":[{"name":"pointsize"}],"output":{"name":"pointsize"}}],[11,"clone","","",1,{"inputs":[{"name":"range"}],"output":{"name":"range"}}],[11,"clone","","",39,{"inputs":[{"name":"size"}],"output":{"name":"size"}}],[11,"clone","","",2,{"inputs":[{"name":"axes"}],"output":{"name":"axes"}}],[11,"clone","","",3,{"inputs":[{"name":"axis"}],"output":{"name":"axis"}}],[11,"clone","","",4,{"inputs":[{"name":"color"}],"output":{"name":"color"}}],[11,"clone","","",5,{"inputs":[{"name":"grid"}],"output":{"name":"grid"}}],[11,"clone","","",6,{"inputs":[{"name":"linetype"}],"output":{"name":"linetype"}}],[11,"clone","","",7,{"inputs":[{"name":"pointtype"}],"output":{"name":"pointtype"}}],[11,"clone","","",8,{"inputs":[{"name":"scale"}],"output":{"name":"scale"}}],[11,"clone","","",40,{"inputs":[{"name":"scalefactor"}],"output":{"name":"scalefactor"}}],[11,"clone","","",9,{"inputs":[{"name":"terminal"}],"output":{"name":"terminal"}}]],"paths":[[3,"TicLabels"],[4,"Range"],[4,"Axes"],[4,"Axis"],[4,"Color"],[4,"Grid"],[4,"LineType"],[4,"PointType"],[4,"Scale"],[4,"Terminal"],[3,"Properties"],[3,"Candlesticks"],[3,"Properties"],[3,"Figure"],[4,"Curve"],[3,"Properties"],[4,"ErrorBar"],[3,"Properties"],[3,"FilledCurve"],[3,"Properties"],[3,"Properties"],[4,"Boxed"],[4,"Horizontal"],[4,"Justification"],[4,"Order"],[4,"Position"],[4,"Stacked"],[4,"Vertical"],[3,"Properties"],[8,"Configure"],[8,"Data"],[8,"Plot"],[8,"Set"],[3,"BoxWidth"],[3,"FontSize"],[3,"Key"],[3,"LineWidth"],[3,"Opacity"],[3,"PointSize"],[3,"Size"],[3,"ScaleFactor"]]};
searchIndex['zip'] = {"items":[[0,"","zip","Iterator zippers",null,null],[3,"Zip2","","Two-iterator zipper",null,null],[3,"Zip3","","Three-iterator zipper",null,null],[3,"Zip4","","Four-iterator zipper",null,null],[3,"Zip5","","Five-iterator zipper",null,null],[6,"Item","","",null,null],[11,"next","","",0,{"inputs":[{"name":"zip2"}],"output":{"name":"option"}}],[11,"size_hint","","",0,null],[6,"Item","","",null,null],[11,"next","","",1,{"inputs":[{"name":"zip3"}],"output":{"name":"option"}}],[11,"size_hint","","",1,null],[6,"Item","","",null,null],[11,"next","","",2,{"inputs":[{"name":"zip4"}],"output":{"name":"option"}}],[11,"size_hint","","",2,null],[6,"Item","","",null,null],[11,"next","","",3,{"inputs":[{"name":"zip5"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[14,"zip!","","This macro emulates an \"any-arity\" free function that zips iterators",null,null]],"paths":[[3,"Zip2"],[3,"Zip3"],[3,"Zip4"],[3,"Zip5"]]};
searchIndex['cast'] = {"items":[[0,"","cast","Checked scalar casting",null,null],[8,"From","","The \"cast from\" operation",null,null],[16,"Output","","The result of the cast operation: either `Self` or `Option<Self>`",0,null],[10,"from","","Checked cast from `Src` to `Self`",0,{"inputs":[{"name":"from"},{"name":"src"}],"output":{"name":"output"}}],[11,"from_","","Workaround for rust-lang/rust#24382. See module docs for details",0,{"inputs":[{"name":"from"},{"name":"src"}],"output":{"name":"output"}}],[6,"Output","","",null,null]],"paths":[[8,"From"]]};
searchIndex['byteorder'] = {"items":[[0,"","byteorder","This crate provides convenience methods for encoding and decoding numbers\nin either big-endian or little-endian order.",null,null],[4,"Error","","An error type for reading bytes.",null,null],[13,"UnexpectedEOF","","An unexpected EOF.",0,null],[13,"Io","","Any underlying IO error that occurs while reading bytes.",0,null],[4,"BigEndian","","Defines big-endian serialization.",null,null],[4,"LittleEndian","","Defines little-endian serialization.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"error"}}],[11,"from","std::io::error","",1,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"error"}}],[11,"fmt","byteorder","",0,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[6,"Result","","A short-hand for `result::Result<T, byteorder::Error>`.",null,null],[6,"NativeEndian","","Defines system native-endian serialization.",null,null],[8,"ReadBytesExt","","Extends `Read` with methods for reading numbers. (For `std::io`.)",null,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[8,"WriteBytesExt","","Extends `Write` with methods for writing numbers. (For `std::io`.)",null,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u8"}],"output":{"name":"result"}}],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i8"}],"output":{"name":"result"}}],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u16"}],"output":{"name":"result"}}],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i16"}],"output":{"name":"result"}}],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u32"}],"output":{"name":"result"}}],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i32"}],"output":{"name":"result"}}],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u64"}],"output":{"name":"result"}}],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i64"}],"output":{"name":"result"}}],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"f32"}],"output":{"name":"result"}}],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"f64"}],"output":{"name":"result"}}],[8,"ByteOrder","","ByteOrder describes types that can serialize integers as bytes.",null,null],[10,"read_u16","","Reads an unsigned 16 bit integer from `buf`.",4,null],[10,"read_u32","","Reads an unsigned 32 bit integer from `buf`.",4,null],[10,"read_u64","","Reads an unsigned 64 bit integer from `buf`.",4,null],[10,"read_uint","","Reads an unsigned n-bytes integer from `buf`.",4,null],[10,"write_u16","","Writes an unsigned 16 bit integer `n` to `buf`.",4,null],[10,"write_u32","","Writes an unsigned 32 bit integer `n` to `buf`.",4,null],[10,"write_u64","","Writes an unsigned 64 bit integer `n` to `buf`.",4,null],[11,"read_i16","","Reads a signed 16 bit integer from `buf`.",4,null],[11,"read_i32","","Reads a signed 32 bit integer from `buf`.",4,null],[11,"read_i64","","Reads a signed 64 bit integer from `buf`.",4,null],[11,"read_int","","Reads a signed n-bytes integer from `buf`.",4,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number.",4,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number.",4,null],[11,"write_i16","","Writes a signed 16 bit integer `n` to `buf`.",4,null],[11,"write_i32","","Writes a signed 32 bit integer `n` to `buf`.",4,null],[11,"write_i64","","Writes a signed 64 bit integer `n` to `buf`.",4,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number.",4,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number.",4,null],[11,"read_u16","","",5,null],[11,"read_u32","","",5,null],[11,"read_u64","","",5,null],[11,"read_uint","","",5,null],[11,"write_u16","","",5,null],[11,"write_u32","","",5,null],[11,"write_u64","","",5,null],[11,"read_u16","","",6,null],[11,"read_u32","","",6,null],[11,"read_u64","","",6,null],[11,"read_uint","","",6,null],[11,"write_u16","","",6,null],[11,"write_u32","","",6,null],[11,"write_u64","","",6,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",2,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",2,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",2,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",2,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",2,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",2,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",2,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",2,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",2,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",2,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",2,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",2,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",3,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",3,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",3,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",3,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",3,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",3,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",3,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",3,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",3,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",3,null]],"paths":[[4,"Error"],[3,"Error"],[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ByteOrder"],[4,"BigEndian"],[4,"LittleEndian"]]};
initSearch(searchIndex);
