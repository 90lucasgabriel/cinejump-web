import React, { useCallback, createRef, useState } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Wrapper } from 'components';
import { EntityImage, EntityImageListLoading } from 'containers';
import {
  Container,
  Title,
  ListContainer,
  ListContent,
  PreviousButton,
  NextButton,
  MessageContainer,
} from './styles';

import Props from './types';

const EntityImageList: React.FC<Props> = ({
  theme,
  background,
  color,
  title,
  data,
  isLoading = false,
  message = 'Não há resultados.',
  showShadow,
  hideFavoriteButton,
  disabled,
  showInfo,
  hideSubtitle,
}) => {
  const itemsContainer = createRef<HTMLDivElement>();
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const checkButtons = useCallback(
    (isNext: boolean) => {
      const itemsContainerDOM = itemsContainer.current as HTMLDivElement;

      // Calcs
      const totalWidth = itemsContainerDOM?.scrollWidth;
      const visibleWidth = itemsContainerDOM?.clientWidth;
      const scrollCount = itemsContainerDOM?.scrollLeft;
      const restWidth = totalWidth - scrollCount - visibleWidth;

      setShowPreviousButton(
        totalWidth > visibleWidth &&
          (isNext || itemsContainerDOM.scrollLeft > 2),
      );
      setShowNextButton(
        totalWidth > visibleWidth && (!isNext || restWidth > 0),
      );
    },
    [itemsContainer],
  );

  // Prev navigate button
  const handlePrevious = useCallback(() => {
    const itemsContainerDOM = itemsContainer.current as HTMLDivElement;
    itemsContainerDOM.scrollBy(-1, 0);

    checkButtons(false);
  }, [itemsContainer, checkButtons]);

  // Next navigate button
  const handleNext = useCallback(() => {
    const itemsContainerDOM = itemsContainer.current as HTMLDivElement;
    itemsContainerDOM.scrollBy(1, 0);

    checkButtons(true);
  }, [itemsContainer, checkButtons]);

  return (
    <Wrapper theme={theme} background={background} color={color}>
      <Container>
        {title && (
          <Title theme={theme} color={color}>
            {title}
          </Title>
        )}

        {isLoading && (
          <EntityImageListLoading
            showShadow={showShadow}
            showInfo={showInfo}
            hideSubtitle={hideSubtitle}
            theme={theme}
            background={background}
            color={color}
          />
        )}

        {!isLoading && data.length > 0 && (
          <>
            {showPreviousButton && (
              <PreviousButton
                variant="icon"
                theme="light"
                onClick={handlePrevious}
              >
                <FiChevronLeft />
              </PreviousButton>
            )}
            <ListContainer ref={itemsContainer}>
              <ListContent>
                {data.map(entity => (
                  <EntityImage
                    key={entity.id}
                    showShadow={showShadow}
                    hideFavoriteButton={hideFavoriteButton}
                    disabled={disabled}
                    showInfo={showInfo}
                    hideSubtitle={hideSubtitle}
                    {...entity}
                  />
                ))}
              </ListContent>
            </ListContainer>
            {showNextButton && (
              <NextButton variant="icon" theme="light" onClick={handleNext}>
                <FiChevronRight />
              </NextButton>
            )}
          </>
        )}

        {!isLoading && data.length === 0 && (
          <MessageContainer>{message}</MessageContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default EntityImageList;
