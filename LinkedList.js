const LinkedList= (() => {
    let head = null;
    let tail= null;
    let size = 0;

    
    const append = (value) => {
        const newNode= Node(value)
        size++
        if (head === null) {
            head= newNode;
            tail= newNode;
        } else {
            let currentNode= head
            while(currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode
            }
            currentNode.nextNode= newNode;
            tail= newNode
        }
    };

    const prepend = (value) => {
        const newNode= Node(value)
        size++
        if (head === null) {
            head= newNode;
            tail= newNode;
        } else {
            newNode.nextNode= head
            head= newNode
        }
    }

    return{append, prepend}
})();