import React, { useCallback, createRef, useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Wrapper } from 'components';
import { EntityImage, EntityImageListLoading } from 'containers';
import {
  Container,
  Title,
  ListContainer,
  ListContent,
  EntityImageContainer,
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
  showModal,
}) => {
  const itemsContainer = createRef<HTMLDivElement>();
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const parsedData = useMemo(() => {
    return data.filter(item => item.featuredImage || item.backdrop);
  }, [data]);

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
    const itemWidth = itemsContainerDOM?.scrollWidth / parsedData.length;
    itemsContainerDOM.scrollBy(-itemWidth, 0);

    checkButtons(false);
  }, [itemsContainer, parsedData.length, checkButtons]);

  // Next navigate button
  const handleNext = useCallback(() => {
    const itemsContainerDOM = itemsContainer.current as HTMLDivElement;
    const itemWidth = itemsContainerDOM?.scrollWidth / parsedData.length;
    itemsContainerDOM.scrollBy(itemWidth, 0);

    checkButtons(true);
  }, [itemsContainer, parsedData.length, checkButtons]);

  return (
    <AnimatePresence>
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

          {!isLoading && parsedData.length > 0 && (
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
                  {parsedData.map(entity => (
                    <EntityImageContainer key={entity.id}>
                      <EntityImage
                        showShadow={showShadow}
                        hideFavoriteButton={hideFavoriteButton}
                        disabled={disabled}
                        showInfo={showInfo}
                        hideSubtitle={hideSubtitle}
                        showModal={showModal}
                        {...entity}
                      />
                    </EntityImageContainer>
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

          {!isLoading && parsedData.length === 0 && (
            <MessageContainer>{message}</MessageContainer>
          )}
        </Container>
      </Wrapper>
    </AnimatePresence>
  );
};

export default EntityImageList;
