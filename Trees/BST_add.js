function add(val){
    newNode = new BTNode;
    newNode.val = val;
    r = this.root;

    while (r){
        if (r.val < val){
            if (!r.left){
                r.left = newNode;
                break;
            }
            else
                r = r.left;
        }
        else
            if (r.val > val){
                if (!r.right){
                    r.right = newNode;
                    break;
                }
                else
                    r = r.right;
            }
    }
}