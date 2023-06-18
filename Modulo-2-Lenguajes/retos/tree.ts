type NodeTree<T> = T & { childrens?: NodeTree<T>[] };
