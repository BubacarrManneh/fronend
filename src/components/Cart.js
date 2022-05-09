import React, { useState, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Badge } from '@material-ui/core';
import { CartContext } from './CartContext';

const useStyles = makeStyles({
  shoppingCart: {
    paddingBottom: "2rem",
    fontSize: "2rem",
    color: "blue",
    cursor: "pointer",
  },
  Dialog: {
    margin:  0,
    padding: 0,
  },
  Btn: {
    background: "green",
    outline: "none",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: '.6em',
    display: 'flex',
    marginLeft: '4rem',
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  badge: {
    // right: "2rem",
    // top: ".2rem",
  },
});

const Cart = () => {
      const classes = useStyles();
       
      const [open, setOpen] = useState(false)

      const handleClose = (() => {
        setOpen(false)
      })
      const handleOpen = (() => {
        setOpen(true)
      })

const { cartLength, removeCountry } = useContext(CartContext)

  return (
    <>
      <Badge
        badgeContent={cartLength}
        className={classes.badge}
        color="primary"
      >
        <ShoppingCartIcon
          className={classes.shoppingCart}
          onClick={() => setOpen(handleOpen)}
        />
      </Badge>

      <Dialog
        className={classes.Dialog}
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">Shopping Card</DialogTitle>
        <List>
          <ListItem>
            <Button className={classes.Btn} onClick={removeCountry}>
              Remove
            </Button>
          </ListItem>
        </List>
      </Dialog>
    </>
  );
}

export default Cart