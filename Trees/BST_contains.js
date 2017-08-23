function contains(val){
    let r = this.root;
    while(r.left != null && r.right != null){
        if(r.val > val){
            r = r.left;
        }
        else if (r.val < val){
            r = r.right;
        }
        else
            return true;
        if(!r){
            break;
        }
    }
    return false
}