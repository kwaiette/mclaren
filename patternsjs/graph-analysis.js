//types of graph analysis
    //file is a graph
    //file is being treated like a graph
        //what do we consider a node? an edge?
        //what is the structure of the file?
            // TXT: a node is one or more lines of text followed by a blank line
            //      whitespace at the beginning of a line indicates some relationship to other lines
            //      indent noIndent indent indicates a parent node (noIndent) with two children (indent, indent)
            //      indent depth is one type of connection, hierarchical; difference in indentation of sequential lines is another, and indicates direction;
//what do we want to know from the graph analysis?
    //which unconnected nodes are related?
        //similar text
        //similar local structure
        //