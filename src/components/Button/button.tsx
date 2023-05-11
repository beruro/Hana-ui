import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

//size
export type ButtonSize = "lg" | "sm";
//type
export type ButtonType = "primary" | "default" | "danger" | "link";

//组件的接口
interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

//加更多的原生props
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * >按钮用于开始一个即时操作。
 *
 * ### 何时使用
 * 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
 * 在violet-design我们提供了6种按钮
 *
 * - 默认按钮：用于没有主次之分的一组行动点。
 * - 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
 * - 危险按钮：删除/移动/修改权限等危险操作，一般需要二次确认。
 * - 链接按钮：一般用于链接，即导航至某位置。
 * - 图标按钮：可以通过Icon组件，为按钮提供各式各样的图标选择。
 * - 虚线按钮：常用于添加操作。
 *
 *
 * 除了默认Mid Button尺寸，还提供了两种尺寸可供自由组合
 * - Large Button
 * - Samll Button
 *
 * 所有按钮都提供了disabled属性，用于行动点不可用的时候，一般需要文案解释。
 *
 */
export const Button: FC<ButtonProps> = (props) => {
  const { className, disabled, size, children, btnType, href, ...restProps } =
    props;

  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });

  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

export default Button;
