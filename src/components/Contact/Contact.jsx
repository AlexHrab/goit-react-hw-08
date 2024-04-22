import css from "./Contact.module.css";
import { HiPhone } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { useEffect, useState } from "react";
import clsx from "clsx";

function Contact({ id, name, number, isOpen }) {
  const dispatch = useDispatch();
  const btnClass = clsx(css.btn, css.delete);

  return (
    <li className={css.item}>
      <p className={css.contacts}>
        <span className={css.span}>
          <HiUser />
          {name}
        </span>
        <span className={css.span}>
          <HiPhone />
          {number}
        </span>
      </p>

      <button className={css.btn} onClick={() => isOpen(id)}>
        Edit
      </button>

      <button
        className={btnClass}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        {"delete"}
      </button>
    </li>
  );
}

export default Contact;
