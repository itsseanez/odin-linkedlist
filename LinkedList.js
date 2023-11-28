const Node = require('./Node');
const LinkedList= (() => {
    let HEAD = null;
    let TAIL= null;
    let SIZE = 0;

    //returns the first node in the list
    const head= () => {
        if(!HEAD) return null
        return HEAD.value
    };

    //returns the last node in the list
    const tail= () => {
        if(!TAIL) return null
        let currentNode= HEAD
        while(currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode
        }
        return currentNode.value
    };

    //returns the total number of nodes in the list
    const size= () => {
        if(!HEAD) return null
        return SIZE
    };
    
    //adds a new node containing value to the end of the list
    const append = (value) => {
        const newNode= new Node(value)
        SIZE++
        if (HEAD === null) {
            HEAD= newNode;
            TAIL= newNode;
        } else {
            let currentNode= HEAD
            while(currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode
            }
            currentNode.nextNode= newNode;
            TAIL= newNode
        }
    };

    //adds a new node containing value to the start of the list
    const prepend = (value) => {
        const newNode= new Node(value)
        SIZE++
        if (HEAD === null) {
            HEAD= newNode;
            TAIL= newNode;
        } else {
            newNode.nextNode= HEAD
            HEAD= newNode
        }
    };

    //returns the node at the given index
    const at = (index) => {
        if (!HEAD) return null;
        let currentNode= HEAD;
        let indexNode;
        for(let i=0; i<index; i++) {
            indexNode= currentNode.nextNode
            if (indexNode == null) return "There is no existing node at this index";
        }
        return indexNode.value;
    };

    //removes the last element from the list
    const pop = () => {
        if (!HEAD) return null;
        let currentNode= HEAD;
        let previousNode= null;
        while(currentNode.nextNode !== null) {
            previousNode= currentNode
            currentNode= currentNode.nextNode
        }
        previousNode.nextNode= null;
        TAIL= previousNode;
        SIZE--
    };

    //returns true if the passed in value is in the list and otherwise returns false
    const contains = (value) => {
        let currentNode= HEAD;
        while(currentNode.nextNode !== null) {
            if(value === currentNode.value) {
                return true;
            }
            currentNode= currentNode.nextNode;
        }
        return false;
    };

    //returns the index of the node containing value, or null if not found
    const find = (value) => {
        let currentNode= HEAD;
        let index=0;
        while(currentNode.nextNode !== null) {
            if(value === currentNode.value) {
                return index;
            }
            currentNode= currentNode.nextNode;
            index++
        }
        return null;
    };

    //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    const toString = () => {
        let currentNode= HEAD;
        let result= ''
        while(currentNode.nextNode !== null) {
            result= result.concat(`(${currentNode.value}) -> `);
            currentNode= currentNode.nextNode;
        }
        result= result.concat(`(${currentNode.value}) -> null`);
        return result;
    }

    return{head, tail, size, append, prepend, at, pop, contains, find, toString}
})();

