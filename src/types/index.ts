import { Document } from 'mongoose';

export interface ICreateConnectionPayload {
  name: string;
  type: string;
  credentials: Record<string, string>;
}

export interface IConnection
  extends Omit<ICreateConnectionPayload, 'credentials'> {
  urn: string;
  credentials: string;
  createdAt: string;
  updatedAt: string;
}

export type IConnectionDocument = IConnection & Document;

export interface IConnectionResponse extends Omit<IConnection, 'credentials'> {
  credentials: Record<string, string>;
}

export interface IFieldsObject {
  name: string;
  type: string | number;
  description?: string;
}

export interface IFieldsMap {
  [key: string]: {
    fields: Array<IFieldsObject>;
  };
}

export interface ICreateConnectionTransformedPayload
  extends Omit<ICreateConnectionPayload, 'credentials'> {
  urn: string;
  credentials: string;
}
