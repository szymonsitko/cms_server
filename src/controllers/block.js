import Block from '../models/block';

const addBlock = (name, content, callback) => {
    let block = new Block();
    block.name = name;
    block.content = content;

    block.save(callback);
}

export default addBlock;