"use client";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Tooltip from '../Tooltip/Tooltip';
import { FaBold, FaItalic, FaListOl, FaListUl } from "react-icons/fa";
import { ImUndo2, ImRedo2 } from "react-icons/im";
import { IoMdBackspace } from "react-icons/io";


interface EditorPropsType {
    className?: string;
    onChange?: (content: string) => void;
}


const TextEditor: React.FC<EditorPropsType> = ({ className, onChange = () => {}}) => {

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                heading: false,
                codeBlock: false,
                blockquote: false,
                horizontalRule: false,
                hardBreak: false
            }),
            Placeholder.configure({
                placeholder: 'Product Description..',
            }),
        ],
        editorProps: {
            attributes: {
                class: 'p-2 h-40 rounded-b-md outline-none',
                Placeholder: 'Type something1...',
            },
        },
        onUpdate:({ editor }) => {
            onChange(editor.getHTML());
        },
    });


    const handleClear = () => {
        editor?.chain().focus().clearContent().run();
    }

    const toggleBold = () => {
        editor?.chain().focus().toggleBold().run();
    };

    const toggleItalic = () => {
        editor?.chain().focus().toggleItalic().run();
    };

    const toggleOrderedList = () => {
        editor?.chain().focus().toggleOrderedList().run();
    };

    const toggleUnorderedList = () => {
        editor?.chain().focus().toggleBulletList().run();
    };

    const redo = () => {
        editor?.chain().focus().redo().run();
    }

    const undo = () => {
        editor?.chain().focus().undo().run();
    }
    
    const buttonClass = 'border border-gray-400 p-2 rounded-md hover:bg-carnation-400 hover:text-white clickEffect';

    const isActive = (type: string) => {
        return editor?.isActive(type) ? ' bg-carnation-500 text-white' : ' bg-gray-100';
    }


    return (
        <div className={'border border-gray-400 rounded-md focus-within:border-carnation-300 ' + className} >
            <div className={`flex justify-between rounded-t-md ${editor?.isFocused ? 'bg-carnation-100' : ' bg-gray-200'}`}>
                <div className='flex space-x-1 px-2 py-2'>
                    <Tooltip className={buttonClass + isActive('bold')} label='Bold' onClick={toggleBold}><FaBold/></Tooltip>
                    <Tooltip className={buttonClass + isActive('italic')} label='Italic' onClick={toggleItalic}><FaItalic/></Tooltip>
                    <Tooltip className={buttonClass + isActive('orderedList')} label='Numbered List' onClick={toggleOrderedList}><FaListOl/></Tooltip>
                    <Tooltip className={buttonClass + isActive('bulletList')} label='Bullet List' onClick={toggleUnorderedList}><FaListUl/></Tooltip>
                </div>

                <div className='flex space-x-1 px-2 py-2'>
                    <Tooltip className={buttonClass + ' bg-gray-100'} label='Undo' onClick={undo}><ImUndo2/></Tooltip>
                    <Tooltip className={buttonClass + ' bg-gray-100'} label='Redo' onClick={redo}><ImRedo2/></Tooltip>
                    <Tooltip className={buttonClass + ' bg-gray-100'} label='Clear All' onClick={handleClear}><IoMdBackspace/></Tooltip>
                </div>
            </div>

            <div className='h-40 overflow-y-auto overscroll-y-contain relative'>
                <EditorContent editor={editor} />
                {!editor?.isInitialized && <p className='m-2 text-gray-400 absolute top-0'>Loading...</p> }
            </div>
        </div>
    );
};

export default TextEditor;
