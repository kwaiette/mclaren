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

onCreateNode() {
    lookForRelatedNodes()
}

lookForRelatedNodes() {
    thisNode = analyzeThisNode()
    lookForOtherNodesWithSimilarTraits(thisNode)
}

lookForOtherNodesWithSimilarTraits(subject) {
    //do we have any nodes with words in common?
    //do we have any subgraphs with similar structure?
    //do we have any significant character similarities?
        // X is not a common character but it's in both of these nodes
        // significant meaning these two things share a similarity that isn't shared with other things
        //    isn't shared with half? does frequency correlate with what proportion of the population not having it makes it significant?
        //      X is only in 1/3 of the nodes; this node has one X in it, not very significant; that node has four Xs, that's significant; Y is only in 1 node and it's in the new node once, that's significant;
}

//we have something that is:node and it contains:text; we're going to assign name A to is:node&contains:text
//we found a bunch of A
    //do we see any other similarities?

//file
    //has nodes
        //has text
            //has words
                //has letters
        //has structure

// (file) -*-> (node) -*-> (word) -*-> (letter)
// letter A only exists in the database once
// "letter"  -> (L) -> (E) -> (T) +
//               (R) <-/  \---/  \/
// has:traversal LETR; LE ET TT TE ER
// hypothesis: words can be human readable in context 

//analyzing git
// here is the history of the file; what is your narrative?
//  narrative can cover multiple commits, can include other narratives

//process for parsing a file
//  describe structure of file, assign meaning to each element
//process for translating a file to a different format
//  describe 

//description of text file graph
//file is node
//file contains nodes
//a node is a block of text, followed by a blank line, or end of file
    //block of text = one or more words
        //word = one or more letters; has meaning
            //words may include symbols, either accidentally or on purpose

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

//read byte B1
//store B1 as node in graph
//read byte B2
//store B2 as node in graph
//create B1-B2 edge (type:sequential) in graph
//read byte B3
//store B3 as node in graph
//create B2-B3 as edge in graph (type:sequential)

//squirrel tangent limit
    //max depth
    //max time
    //max processing percentage
    //
