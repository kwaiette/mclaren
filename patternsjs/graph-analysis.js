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
            //words
                //identical - easy
                //approximate - intermediate
                    //typos
                    //mis-spellings
                    //prefix or suffix addition
                    //conjugation
                //meaning - hard
                    //different words that mean the same - moderately hard
                    //phrases that have similar meanings - very hard
        //similar local structure
        //


//loremipsum-ing
//I'm comparing two nodes
//I want to check for identical word matches
//  identicalCheck()
//I want to check for approximate matches
//  approximateCheck()
//I know that I will want to check meaning in the future but that code isn't implemented yet
//  loremipsum meaningCheck()
