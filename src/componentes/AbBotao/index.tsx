import React from 'react';
import styled, { css } from 'styled-components';

const BotaoEstilizado = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) =>
    props.tipo === 'primario' ? '#EB9B00' : '#FFF'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: #fff;
  color: ${(props: AbBotaoProps) =>
    props.tipo === 'primario' ? '#FFF' : '#eb8b00'};
  font-size: 20px;
  cursor: pointer;

  ${(props: AbBotaoProps) =>
    props.tipo === 'primario'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `}
`;

export interface AbBotaoProps {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}
export const AbBotao = ({
  onClick,
  texto,
  tipo = 'primario',
}: AbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  );
};
