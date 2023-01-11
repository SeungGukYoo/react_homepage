import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true)
    };
  });

  useEffect(() =>
    open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className='modal'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.5 } }}
        >
          <motion.div
            className='con'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            {props.children}
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 1 } }}
            exit={{ opacity: 0, x: 100 }}
            className='close'
            onClick={() => setOpen(false)}
          >
            close
          </motion.span>
        </motion.aside>
      )}
    </AnimatePresence>
  );
});

export default Modal;
