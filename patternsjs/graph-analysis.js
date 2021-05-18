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
                        //machine learning to figure out meaning while processing
                            //this looks like X, I'm going to start processing as if X, but I'll stop if anyone tells me that future data says this isn't X
                                //alternate universe graph
                                //graph merge
                            //probability of X matching
                                //increases as confirming data increases
        //similar local structure
            //a node with X children
            //a tree with X depth
            //a graph that consists of multiple trees


//loremipsum-ing
//I'm comparing two nodes
//I want to check for identical word matches
//  identicalCheck()
//I want to check for approximate matches
//  approximateCheck()
//I know that I will want to check meaning in the future but that code isn't implemented yet
//  loremipsum meaningCheck()


//graph-analysis pseudocode
foreach(readAllFiles() as file) {
    if isFileAGraph()
        addFileToGraph(file)
}

addFileToGraph(file) {
    createNode(file.name)
    prevNode = null
    foreach file.nodeblock
        createNode(file.nodeblock.name)
        createSequentialEdge(currNode, prevNode)
}

//design principle
    //if I'm interacting with a UI, nothing should change the way I NORMALLY interact with it without an action on my part
        //code completion
            //[enter] to accept completion == BAD; [enter] is a normal interaction with the editor
            //[down] to scroll through completions == BAD; [down] is a normal interaction
    //UI should always be predictable; I know that every time I do X, Y will happen
    

//procedure
    //readfile
        //while reading, begin analyzing based on hypothesized format
        //if doesn't look like hypothesized format, kill analyzing thread, form new hypothesis, start new thread at beginning of buffer

//callback function
    //translate to api call
