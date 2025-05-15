import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import clsx from 'clsx';
import { useState } from 'react';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';
import { Spacing } from 'src/ui/spacing/Spacing';
import { Text } from 'src/ui/text';
import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	articleState: ArticleStateType;
	submit?: (model: ArticleStateType) => void;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const [isAsideOpen, setIsAsideOpen] = useState(false);
	const [model, setModel] = useState(props.articleState);
	const updateField =
		<K extends keyof ArticleStateType>(field: K) =>
		(value: ArticleStateType[K]) => {
			setModel((prev) => ({
				...prev,
				[field]: value,
			}));
		};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.submit?.(model);
	};

return (
	<>
		<ArrowButton
			isOpen={isAsideOpen}
			onClick={() => {
				setIsAsideOpen(!isAsideOpen);
			}}
		/>
		{isAsideOpen && (
			<div
				className={styles.overlay}
				onClick={() => setIsAsideOpen(false)}
			/>
		)}
		<aside
			className={clsx(styles.container, {
				[styles.container_open]: isAsideOpen,
			})}
			onClick={(e) => e.stopPropagation()} 
		>
			<form
				className={styles.form}
				onSubmit={onSubmit}
				onReset={() => setModel(defaultArticleState)}
			>
					<Text weight={800} size={31} uppercase>
						Задайте параметры
					</Text>
					<Spacing size={50} />
					<Select
						selected={model.fontFamilyOption}
						onChange={updateField('fontFamilyOption')}
						options={fontFamilyOptions}
						title='Шрифт'
					/>
					<Spacing size={50} />
					<RadioGroup
						selected={model.fontSizeOption}
						name='radio'
						onChange={updateField('fontSizeOption')}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>
					<Spacing size={50} />
					<Select
						selected={model.fontColor}
						onChange={updateField('fontColor')}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						selected={model.backgroundColor}
						onChange={updateField('backgroundColor')}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Spacing size={50} />
					<Select
						selected={model.contentWidth}
						onChange={updateField('contentWidth')}
						options={contentWidthArr}
						title='Ширина контента'
					/>
					<Spacing size={196} />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
