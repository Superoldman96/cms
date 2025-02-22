<?php
/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license https://craftcms.github.io/license/
 */

namespace craft\errors;

use yii\base\Exception;

/**
 * Class InvalidTypeException
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 3.0.0
 */
class InvalidTypeException extends Exception
{
    /**
     * @var class-string The invalid class name
     */
    public string $class;

    /**
     * @var class-string The base class or interface that [[$class]] was supposed to be
     */
    public string $requiredType;

    /**
     * Constructor.
     *
     * @param class-string $class The class that doesn’t exist or doesn’t extend/implement $requiredType
     * @param class-string $requiredType The base class or interface that $class was supposed to be
     * @param string|null $message The error message
     * @param int $code The error code
     */
    public function __construct(string $class, string $requiredType, ?string $message = null, int $code = 0)
    {
        $this->class = $class;
        $this->requiredType = $requiredType;

        if ($message === null) {
            $message = "$class doesn’t exist or doesn’t extend/implement $requiredType";
        }

        parent::__construct($message, $code);
    }

    /**
     * @return string the user-friendly name of this exception
     */
    public function getName(): string
    {
        return 'Invalid component type';
    }
}
