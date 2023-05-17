import React, { FC, useState } from "react";
import classNames from "classnames";
import Icon from "../Icon";
import Transition from "../Transition";
export type AlertType = "success" | "default" | "danger" | "warning";

export interface AlertProps {
  /**标题 */
  title: string;
  /**描述 */
  description?: string;
  /**类型 四种可选 针对四种不同的场景 */
  type?: AlertType;
  /**关闭alert时触发的事件 */
  onClose?: () => void;
  /**是否显示关闭图标*/
  closable?: boolean;
}
