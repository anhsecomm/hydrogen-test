import {BuilderComponent} from '@builder.io/react';
import {useEffect, useState} from 'react';
import type {BuilderContent as Content} from '@builder.io/sdk';

type BuilderComponentProps = {
  model: string;
  content?: Content | undefined;
  locale: string;
};

const BuilderCustomComponent = ({
  model,
  content,
  locale,
}: BuilderComponentProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return content && mounted ? (
    <BuilderComponent model={model} content={content} locale={locale} />
  ) : (
    <></>
  );
};

export default BuilderCustomComponent;
