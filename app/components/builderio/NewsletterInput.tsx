import type {FormEvent} from 'react';
import React from 'react';

import {useTranslation} from '~/hooks/useTranslation';

import btn from '../../assets/icons/btnNewsLetter.svg';

type MyProps = {textEmail: string};

function NewsletterInput(props: MyProps) {
  const {language} = useTranslation('footer');

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // process sent email here
  };

  return (
    <form
      className="relative flex w-[315px] max-w-[100%] items-center"
      onSubmit={handleOnSubmit}
    >
      <input
        name="inputEmail"
        value={props.textEmail}
        type="email"
        placeholder={language.your_email}
        className="placeholder:text-button-color text-button-color h-[48px] w-[100%] pl-[20px] pr-[60px] text-[13px] border-none outline-none"
      />
      <button className="absolute right-[18px]">
        <img className="w-[100%]" src={btn} alt="btn" />
      </button>
    </form>
  );
}

export default NewsletterInput;
